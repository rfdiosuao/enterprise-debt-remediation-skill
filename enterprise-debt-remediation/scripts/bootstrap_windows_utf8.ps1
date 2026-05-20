param(
    [switch]$Quiet
)

$isWindows = $env:OS -eq 'Windows_NT'
if (-not $isWindows) {
    if (-not $Quiet) {
        Write-Output 'Non-Windows host detected. No UTF-8 bootstrap applied.'
    }
    return
}

$utf8 = New-Object System.Text.UTF8Encoding $false
[Console]::InputEncoding = $utf8
[Console]::OutputEncoding = $utf8
$global:OutputEncoding = $utf8

if (-not $global:PSDefaultParameterValues) {
    $global:PSDefaultParameterValues = @{}
}

$global:PSDefaultParameterValues['*:Encoding'] = 'utf8'

$env:PYTHONUTF8 = '1'
$env:PYTHONIOENCODING = 'utf-8'

if (Get-Command chcp -ErrorAction SilentlyContinue) {
    chcp 65001 | Out-Null
}

if (-not $Quiet) {
    [pscustomobject]@{
        host = 'Windows'
        inputEncoding = [Console]::InputEncoding.WebName
        outputEncoding = [Console]::OutputEncoding.WebName
        pythonUTF8 = $env:PYTHONUTF8
        pythonIOEncoding = $env:PYTHONIOENCODING
        defaultEncodingRule = $global:PSDefaultParameterValues['*:Encoding']
    } | Format-List | Out-String | Write-Output
}
