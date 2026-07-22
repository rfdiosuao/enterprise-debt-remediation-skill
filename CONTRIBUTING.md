# Contributing

Thank you for improving Enterprise Debt Remediation. Contributions should preserve the project's evidence-first contract: findings must be reproducible, remediation must be bounded, and completion claims must be backed by fresh verification.

## Development flow

1. Open an issue describing the target platform, current behavior, and desired outcome.
2. Keep each pull request focused on one skill, adapter, validator, or documentation concern.
3. Update examples and references when behavior changes.
4. Validate both skill directories before requesting review.

```powershell
python .\enterprise-debt-remediation\scripts\validate_skill.py .\enterprise-debt-remediation
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\enterprise-debt-remediation
python "$env:USERPROFILE\.codex\skills\.system\skill-creator\scripts\quick_validate.py" .\hz
```

If the system validator is unavailable, report that limitation explicitly instead of claiming complete validation.

## Pull requests

Include the problem, evidence, behavior change, verification output, compatibility impact, and rollback path. Do not commit customer data, internal audit evidence, credentials, or proprietary project excerpts.
