@echo off
echo ========================================
echo   Portfolio Alvaro - Iniciando servidor
echo ========================================
echo.

cd /d "%~dp0"

echo Instalando dependencias...
call npm install
echo.

echo Iniciando servidor de desarrollo...
echo Abre tu navegador en: http://localhost:3000
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

call npm run dev

pause
