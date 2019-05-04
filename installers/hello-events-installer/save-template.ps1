# Saves the customizations made on a site as a template for the PnP Provision Engine

$TemplateFilePath = ".\hello-events-template-DRAFT.xml"
$TraceLogFilePath = ".\save-template.log"
$TemplateSiteUrl = Read-Host "Template site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents)"

Write-Host "Provide the credentials to connect to the site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

Write-Host "Connecting to the site..."
Connect-PnPOnline -Url $TemplateSiteUrl -Credentials $UserCredential

Write-Host "Saving the site as a template..."
Get-PnPProvisioningTemplate -Out $TemplateFilePath -Handlers Fields,ContentTypes,Lists

Write-Host "Adding files to the template..."
Add-PnPFileToProvisioningTemplate -Path ".\hello-events-template.xml" -Source ".\default-files\team-event.png" -Folder "EventContentImages" -FileLevel Published -FileOverwrite:$true

# Note: DataRows were added manually to the template

Write-Host "Done."
