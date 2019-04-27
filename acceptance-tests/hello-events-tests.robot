*** Settings ***
Library  SeleniumLibrary

*** Variables ***
# update ${Url} with the URL of the tenant or the local workbench
${Url}  https://localhost:4321/temp/workbench.html
${Browser}  Chrome

*** Keywords ***
Open Page
    [Documentation]  Open the page given in the url.
	Open browser  ${Url}  ${Browser}
    Go To  ${Url}

Add Web Part
    [Documentation]  Add the given web part to the page.
	[Arguments]  ${WebPartTitle}
	Click Button  xpath://button[@aria-label="Add a new web part in column one"]
	Click Button  xpath://button[@aria-label="${WebPartTitle}"]
	# waits for the web part to be rendered, depending on async requests and other conditions
	# it might be necessary to change it to wait for the rendering of specific elements
	Wait Until Page Contains Element  xpath://div[contains(text(),"${WebPartTitle}")]

*** Test Cases ***
display events from an Events list
    Open Page
	Add Web Part  Hello Events
	Page Should Contain  EduCamp
	Page Should Contain  Expo IT
	Page Should Contain  Marketing Workshop
