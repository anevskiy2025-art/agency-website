@echo off
title Aether Web Studio - Cloud Deployer
echo ========================================================
echo   ÆTHER DIGITAL STUDIO - CLOUD DEPLOYER
echo ========================================================
echo.

echo [1/3] Добавление изменений в Git...
git add .

echo.
echo [2/3] Создание коммита...
git commit -m "Set up GitHub Actions deployment"

echo.
echo [3/3] Отправка изменений на GitHub...
git push origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ОШИБКА: Не удалось отправить файлы на GitHub.
    pause
    exit /b
)

echo.
echo ========================================================
echo Изменения отправлены на GitHub!
echo Теперь GitHub в облаке автоматически соберет и запустит ваш сайт.
echo ========================================================
pause
