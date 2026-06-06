@echo off
chcp 65001 >nul
title Aether Web Studio - Cloud Deployer
echo ========================================================
echo   AETHER DIGITAL STUDIO - CLOUD DEPLOYER
echo ========================================================
echo.

echo [1/4] Force-adding asset images...
git add -f frontend/src/assets/*.png

echo.
echo [2/4] Adding all other changes...
git add -A

echo.
echo [3/4] Creating commit...
git status --short
git commit -m "Deploy: assets + code update %date% %time:~0,5%"

echo.
echo [4/4] Pushing to GitHub...
git push origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Push failed.
    pause
    exit /b
)

echo.
echo ========================================================
echo Deployed successfully!
echo GitHub Actions will now build and publish your site.
echo ========================================================
pause
