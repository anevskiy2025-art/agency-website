@echo off
title Aether Web Studio - Asset Importer
echo ========================================================
echo   ÆTHER DIGITAL STUDIO - ASSET IMPORTER
echo ========================================================
echo.

mkdir "frontend\src\assets" 2>nul

echo [1/4] Копирование макета Verge Studio...
copy /Y "C:\Users\User\.gemini\antigravity\brain\bc8e4694-d1dc-4356-9a71-f5933e981a38\verge_mockup_1780742822739.png" "frontend\src\assets\verge.png"

echo [2/4] Копирование макета Lumina Dashboard...
copy /Y "C:\Users\User\.gemini\antigravity\brain\bc8e4694-d1dc-4356-9a71-f5933e981a38\lumina_mockup_1780742879703.png" "frontend\src\assets\lumina.png"

echo [3/4] Копирование макета Vesper Brand...
copy /Y "C:\Users\User\.gemini\antigravity\brain\bc8e4694-d1dc-4356-9a71-f5933e981a38\vesper_mockup_1780742961739.png" "frontend\src\assets\vesper.png"

echo [4/4] Копирование макета Onyx Store...
copy /Y "C:\Users\User\.gemini\antigravity\brain\bc8e4694-d1dc-4356-9a71-f5933e981a38\onyx_mockup_1780752477112.png" "frontend\src\assets\onyx.png"

echo.
echo ========================================================
echo Импорт ресурсов успешно завершен!
echo ========================================================
pause
