# 环境预检

在任何审计、计划、修复之前先识别当前系统。把系统差异当作输入，不要默认所有环境都能直接读中文文件、跑同一套编码。

## 先检测什么

- 先判断宿主系统是不是 Windows。
- 再判断当前会话是不是已经切到 UTF-8。
- 如果会运行 Python、PowerShell、Git、验证脚本或文档导出，再确认这些命令是否会继承当前会话编码。

## Windows 会话规则

在 Windows 上，先把当前会话统一到 UTF-8，再开始读写文件、调用验证脚本、输出报告。

- 将 `[Console]::InputEncoding` 和 `[Console]::OutputEncoding` 设为 UTF-8。
- 将 `$OutputEncoding` 设为 UTF-8。
- 将 `PSDefaultParameterValues['*:Encoding']` 设为 `utf8`。
- 将 `PYTHONUTF8=1` 和 `PYTHONIOENCODING=utf-8` 写入当前进程环境。
- 需要外部程序交互时，再视情况启用 `chcp 65001`。
- 不做系统级、注册表级或机器全局修改，只做当前会话级设置。

## 使用方式

- 优先运行 `scripts/bootstrap_windows_utf8.ps1`。
- 如果脚本不能注入当前会话，就在当前命令里显式使用 `-Encoding UTF8` 和 UTF-8 环境变量。
- 如果中文输出仍然乱码，先重新跑一次预检，不要继续审计。

## 非 Windows

- 保持 UTF-8 读写习惯。
- 仍然显式写 `-Encoding UTF8`，不要依赖宿主默认编码。
