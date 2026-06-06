@echo off
title Aether Digital Studio Tester
echo ========================================================
echo   ÆTHER DIGITAL STUDIO - PLAYWRIGHT TESTER
echo ========================================================
echo.
echo Installing testing libraries and preparing Playwright browsers...
echo.

echo [1/3] Installing pip requirements...
pip install -r tests/requirements.txt

echo [2/3] Installing Playwright browsers...
playwright install chromium

echo [3/3] Running pytest suite...
echo.
echo NOTE: Ensure the project is running (run_project.bat) before running tests!
echo.
pytest tests/test_agency_site.py

echo.
echo ========================================================
echo Testing complete.
echo ========================================================
echo.
pause
