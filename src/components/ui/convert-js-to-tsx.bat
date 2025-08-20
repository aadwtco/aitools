@echo off
setlocal enabledelayedexpansion

echo Converting .js files to .tsx...
echo Current directory: %CD%
echo.

:: Count .js files (excluding node_modules, dist, build)
set count=0
for /r %%f in (*.js) do (
    echo %%f | findstr /i "node_modules dist build" >nul
    if errorlevel 1 (
        set /a count+=1
        echo Found: %%f
    )
)

if %count%==0 (
    echo No .js files found to convert.
    pause
    exit /b
)

echo.
echo Found %count% .js files to convert.
echo.
set /p confirm="Do you want to proceed with the conversion? (y/N): "
if /i not "%confirm%"=="y" (
    echo Operation cancelled.
    pause
    exit /b
)

echo.
echo Starting conversion...
echo.

set converted=0
set errors=0

for /r %%f in (*.js) do (
    echo %%f | findstr /i "node_modules dist build" >nul
    if errorlevel 1 (
        set "filepath=%%f"
        set "newpath=!filepath:.js=.tsx!"
        
        ren "!filepath!" "*.tsx" 2>nul
        if errorlevel 1 (
            echo ERROR: Failed to convert %%~nxf
            set /a errors+=1
        ) else (
            echo SUCCESS: Converted %%~nxf to %%~nf.tsx
            set /a converted+=1
        )
    )
)

echo.
echo === CONVERSION COMPLETE ===
echo Successfully converted: %converted% files
if %errors% gtr 0 echo Errors encountered: %errors% files
echo.
echo IMPORTANT: Don't forget to:
echo 1. Update import statements in your files to use .tsx extensions
echo 2. Check your vite.config.ts or build configuration  
echo 3. Restart your development server
echo.
pause