# Security Policy

This project processes repository evidence, command output, screenshots, logs, and remediation plans. Those inputs can contain secrets or private business data even when the skill itself contains no credentials.

## Safe use

- Review evidence before publishing it to an issue or pull request.
- Remove tokens, cookies, connection strings, personal data, and internal URLs.
- Run remediation commands with the minimum required permissions.
- Require explicit authorization before publishing, deleting, rewriting history, or changing external systems.
- Treat third-party adapters and scripts as code that must be reviewed before execution.

## Reporting a vulnerability

Use the repository's **Security** page to submit a private report. Include the affected version, reproduction steps, impact, and a suggested mitigation when available. Do not publish working exploits or customer evidence before a fix is available.
