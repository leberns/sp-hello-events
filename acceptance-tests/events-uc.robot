*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${url}  https://localhost:4321/temp/workbench.html
${browser}  Chrome

*** Keywords ***
Open Page
    [Documentation]  Open the workbench.
	Open browser  ${url}  ${browser}
    Go To  ${url}

*** Test Cases ***
Event Display Title
    Open Page
    Page Should Contain  Workbench
