@echo off
chcp 65001 >nul
title Aether Web Studio - Cloud Deployer
echo ========================================================
echo   AETHER DIGITAL STUDIO - CLOUD DEPLOYER
echo ========================================================
echo.

echo [1/3] Adding all changes to Git...
git add -A

echo.
echo [2/3] Creating commit...
git commit -m "Deploy: update %date% %time:~0,5%"

echo.
echo [3/3] Pushing to GitHub...
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
