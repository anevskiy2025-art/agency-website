@echo off
title Aether Web Studio - GitHub Pages Deployer
echo ========================================================
echo   ÆTHER DIGITAL STUDIO - GITHUB PAGES AUTO-DEPLOYER
echo ========================================================
echo.

:: Ask for GitHub Username
set /p GH_USER="Введите ваш никнейм на GitHub (GitHub Username): "
if "%GH_USER%"=="" (
    echo Имя пользователя не может быть пустым!
    pause
    exit /b
)

echo.
echo [1/4] Инициализация Git-репозитория...
git init
git add .
git commit -m "deploy web studio to GitHub Pages"

echo.
echo [2/4] Настройка связи с GitHub репозиторием...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/%GH_USER%/agency-website.git
git branch -M main

echo.
echo [3/4] Установка пакетов сборщика...
cd frontend
call npm install

echo.
echo [4/4] Сборка и деплой на GitHub Pages...
echo.
echo ВАЖНО: Убедитесь, что вы предварительно создали пустой публичный
echo репозиторий с именем "agency-website" на своем аккаунте GitHub!
echo.
call npm run deploy

echo.
echo ========================================================
echo Процесс деплоя завершен!
echo Если не возникло ошибок, ваш сайт скоро будет доступен по адресу:
echo https://%GH_USER%.github.io/agency-website/
echo ========================================================
cd ..
pause
