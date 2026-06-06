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
echo [1/5] Инициализация Git-репозитория...
git init
git add .
git commit -m "deploy web studio to GitHub Pages"

echo.
echo [2/5] Настройка связи с GitHub репозиторием...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/%GH_USER%/agency-website.git
git branch -M main

echo.
echo [3/5] Загрузка исходного кода на GitHub (ветка main)...
echo Сейчас может открыться окно авторизации GitHub. Пожалуйста, войдите в свой аккаунт.
echo.
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ОШИБКА: Не удалось отправить исходный код на GitHub. 
    echo Проверьте авторизацию Git или создали ли вы репозиторий "agency-website".
    pause
    exit /b
)

echo.
echo [4/5] Установка пакетов сборщика...
cd frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ОШИБКА: Не удалось установить npm-пакеты.
    pause
    exit /b
)

echo.
echo [5/5] Сборка и деплой на GitHub Pages...
call npm run deploy
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ОШИБКА: Не удалось выполнить сборку или деплой на GitHub Pages.
    pause
    exit /b
)

echo.
echo ========================================================
echo Процесс деплоя завершен!
echo Если не возникло ошибок, ваш сайт скоро будет доступен по адресу:
echo https://%GH_USER%.github.io/agency-website/
echo ========================================================
cd ..
pause
