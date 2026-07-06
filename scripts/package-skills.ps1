param(
  [string]$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"

$rootPath = (Resolve-Path -LiteralPath $Root).Path
$distPath = Join-Path $rootPath "dist"

New-Item -ItemType Directory -Force -Path $distPath | Out-Null

function New-SkillArchive {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Name
  )

  $sourcePath = Join-Path $rootPath $Name
  $skillFile = Join-Path $sourcePath "SKILL.md"

  if (-not (Test-Path -LiteralPath $skillFile)) {
    throw "Missing SKILL.md for $Name at $skillFile"
  }

  $zipPath = Join-Path $distPath "$Name.zip"
  $skillPath = Join-Path $distPath "$Name.skill"

  Remove-Item -LiteralPath $zipPath -Force -ErrorAction SilentlyContinue
  Compress-Archive -Path (Join-Path $sourcePath "*") -DestinationPath $zipPath -Force
  Move-Item -LiteralPath $zipPath -Destination $skillPath -Force

  $archive = Get-Item -LiteralPath $skillPath
  Write-Host "Packaged $Name -> $($archive.FullName) ($($archive.Length) bytes)"
}

New-SkillArchive -Name "enterprise-debt-remediation"
New-SkillArchive -Name "hz"
