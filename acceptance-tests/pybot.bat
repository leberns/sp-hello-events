REM @echo off
set ROOT_DIR=%~dp0
set PATH=%PATH%;%ROOT_DIR%driver
robot %*
