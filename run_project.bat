@echo off
title Aether Digital Studio Studio Runner
echo ========================================================
echo   ÆTHER DIGITAL STUDIO - LOCAL RUNNER
echo ========================================================
echo.
echo Installing dependencies and launching local development servers...
echo.

echo [1/2] Launching Backend API Server (Port 5000)...
start "Aether Web Studio - Backend" cmd /c "cd backend && echo Installing Backend Packages... && npm install && echo Starting Backend... && npm run dev"

echo [2/2] Launching Frontend React App (Port 5173)...
start "Aether Web Studio - Frontend" cmd /c "cd frontend && echo Installing Frontend Packages... && npm install && echo Starting Frontend... && npm run dev"

echo.
echo ========================================================
echo Servers are launching in separate windows:
echo - Backend API:  http://localhost:5000
echo - Frontend App: http://localhost:5173
echo ========================================================
echo.
pause
