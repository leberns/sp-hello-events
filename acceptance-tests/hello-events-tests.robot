*** Settings ***
Library  SeleniumLibrary
Suite Setup  Open Page

*** Variables ***
${browser}  Chrome

*** Test Cases ***
display events from an Events list
    # wait for the application to render the expected content
    Wait Until Page Contains  EduCamp
    Page Should Contain  EduCamp
    Page Should Contain  Expo IT

*** Keywords ***
Open Page
    [Documentation]  Open the page given in the url
    Open browser  ${url}  ${browser}
    # the Login is just needed if testing against SharePoint,
    # for the local workbench it is skipped
    Run Keyword If  ".sharepoint.com/" in "${url}"  Login
    Add Web Part  Hello Events

Login
    [Documentation]  Login to Office 365
    # set a higher log level so that in case of failure the credentials are not logged
    Set Log Level  WARN
    # enter username
    Wait Until Element Is Visible  xpath://input[@name="loginfmt"]
    # note: the Input Text / Input Password keywords did not work, they did not enter the text at all
    Press Keys  xpath://input[@name="loginfmt"]  ${username}
    Click Element  xpath://input[@type="submit"]
    # enter password
    Sleep  1s
    Wait Until Element Is Visible  xpath://input[@name="passwd"]
    Press Keys  xpath://input[@name="passwd"]  ${password}
    Click Element  xpath://input[@type="submit"]
    # Stay signed in?
    Click Button  No
    # reset the log level
    Set Log Level  TRACE

Add Web Part
    [Documentation]  Add the given web part to the page
    [Arguments]  ${webPartTitle}
    Wait Until Element Is Visible  xpath://button[@aria-label="Add a new web part in column one"]
    Click Button  xpath://button[@aria-label="Add a new web part in column one"]
    Wait Until Element Is Visible  xpath://button[@aria-label="${webPartTitle}"]
    Click Button  xpath://button[@aria-label="${webPartTitle}"]
    # Waits for the web part to be rendered.
    # Depending on the React components and if web part needs configuration
    # it might be necessary to change the test below or input some data before continuing.
    Wait Until Page Contains Element  xpath://div[contains(text(),"${webPartTitle}")]
