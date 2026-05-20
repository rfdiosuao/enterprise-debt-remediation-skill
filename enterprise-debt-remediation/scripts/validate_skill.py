#!/usr/bin/env python3
"""Validate the enterprise debt remediation skill layout."""

from __future__ import annotations

import sys
from pathlib import Path


REQUIRED_FILES = (
    "SKILL.md",
    "agents/openai.yaml",
    "references/core-contract.md",
    "references/adapters.md",
    "references/audit-playbook.md",
    "references/security-baseline.md",
    "references/taxonomy.md",
    "references/scoring.md",
    "examples/audit-report.example.md",
    "assets/adapters/claude-code/hz.md",
    "assets/adapters/openclaw/hz.prompt.md",
    "assets/adapters/hermes/hz.prompt.md",
)

FORBIDDEN_MARKERS = (
    "[" + "".join(("TO", "DO")),
    "".join(("TO", "DO")) + ":",
    "place" + "holder",
    "MANUAL MIGRATION " + "REQUIRED",
)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        raise ValueError("SKILL.md must start with YAML frontmatter")
    _, header, _ = text.split("---", 2)
    data: dict[str, str] = {}
    for raw_line in header.splitlines():
        if ":" not in raw_line:
            continue
        key, value = raw_line.split(":", 1)
        value = value.strip().strip("'").strip('"')
        data[key.strip()] = value
    return data


def main() -> int:
    root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1]
    if not root.exists():
        print(f"ERROR: skill root does not exist: {root}")
        return 1

    missing = [item for item in REQUIRED_FILES if not (root / item).is_file()]
    if missing:
        print("ERROR: missing required files:")
        for item in missing:
            print(f"- {item}")
        return 1

    skill_text = read_text(root / "SKILL.md")
    frontmatter = parse_frontmatter(skill_text)
    if frontmatter.get("name") != "enterprise-debt-remediation":
        print("ERROR: frontmatter name must be enterprise-debt-remediation")
        return 1
    if not frontmatter.get("description"):
        print("ERROR: frontmatter description is required")
        return 1

    all_text_files = [path for path in root.rglob("*") if path.is_file() and path.suffix.lower() in {".md", ".yaml", ".yml", ".py"}]
    for path in all_text_files:
        text = read_text(path)
        for marker in FORBIDDEN_MARKERS:
            if marker in text:
                print(f"ERROR: forbidden marker {marker!r} in {path.relative_to(root)}")
                return 1

    for item in REQUIRED_FILES[2:]:
        if item not in skill_text and item.startswith(("references/", "examples/", "assets/", "scripts/")):
            if item != "assets/adapters/claude-code/hz.md" and item != "assets/adapters/openclaw/hz.prompt.md" and item != "assets/adapters/hermes/hz.prompt.md":
                print(f"ERROR: SKILL.md does not reference {item}")
                return 1

    report = read_text(root / "examples/audit-report.example.md")
    for column in ("Owner", "验证方式", "状态"):
        if column not in report:
            print(f"ERROR: report example missing column {column}")
            return 1

    print(f"OK: validated {root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
