$src = "C:\Users\User\.gemini\antigravity\brain\bc8e4694-d1dc-4356-9a71-f5933e981a38"
$dst = Join-Path $PSScriptRoot "frontend\src\assets"

if (!(Test-Path $dst)) { New-Item -ItemType Directory -Path $dst -Force }

$files = @{
    "verge_mockup_1780742822739.png" = "verge_1.png"
    "verge_2_1780756340854.png" = "verge_2.png"
    "verge_3_1780756351825.png" = "verge_3.png"
    "verge_4_1780756362879.png" = "verge_4.png"
    "verge_5_1780756429448.png" = "verge_5.png"
    "lumina_mockup_1780742879703.png" = "lumina_1.png"
    "lumina_2_1780756439146.png" = "lumina_2.png"
    "lumina_3_1780756449973.png" = "lumina_3.png"
    "lumina_4_1780756470262.png" = "lumina_4.png"
    "lumina_5_1780756481822.png" = "lumina_5.png"
    "vesper_mockup_1780742961739.png" = "vesper_1.png"
    "vesper_2_1780756492040.png" = "vesper_2.png"
    "vesper_3_1780756519522.png" = "vesper_3.png"
    "onyx_mockup_1780752477112.png" = "onyx_1.png"
    "hero_workspace_1780756238362.png" = "hero_workspace.png"
    "abstract_decoration_1780756247651.png" = "abstract_deco.png"
    "team_collaboration_1780756257911.png" = "team_collab.png"
}

$copied = 0
foreach ($entry in $files.GetEnumerator()) {
    $from = Join-Path $src $entry.Key
    $to = Join-Path $dst $entry.Value
    if (Test-Path $from) {
        Copy-Item $from $to -Force
        $copied++
        Write-Host "OK: $($entry.Value)"
    } else {
        Write-Host "SKIP: $($entry.Key) not found"
    }
}

Write-Host ""
Write-Host "Done! Copied $copied files."
Write-Host "Now run deploy.bat"
Read-Host "Press Enter to exit"
