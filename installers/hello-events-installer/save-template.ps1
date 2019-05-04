# Saves the customizations made on a site as a template for the PnP Provision Engine

$TemplateFilePath = ".\hello-events-template-DRAFT.xml"
$TraceLogFilePath = ".\save-template.log"
$TemplateSiteUrl = Read-Host "Template site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents)"

Write-Host "Provide the credentials to connect to the site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

Write-Host "Settings trace log..."
Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

Write-Host "Connecting to the site..."
Connect-PnPOnline -Url $TemplateSiteUrl -Credentials $UserCredential

Write-Host "Saving the site structures as a template..."
# list of possible handlers:
# https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Framework/Provisioning/Model/Handlers.cs
Get-PnPProvisioningTemplate -Out $TemplateFilePath -Handlers Fields,ContentTypes,Lists -ContentTypeGroups "_Hello Events"

Write-Host "Adding file references to the template..."
Add-PnPFileToProvisioningTemplate -Path $TemplateFilePath -Source ".\default-files\team-event.png" -Folder "EventContentImages" -FileLevel Published -FileOverwrite:$true

Write-Host "Adding list items from the existing Event Categories list to the template..."
Add-PnPDataRowsToProvisioningTemplate -Path $TemplateFilePath -List "Event Categories" -Query "<View></View>" -Fields "Title"

Write-Host "Adding list items from the existing Events Catalog list to the template..."
Add-PnPDataRowsToProvisioningTemplate -Path $TemplateFilePath -List "Events Catalog" -Query "<View></View>" -Fields "Title","HEvDescription","HEvStart","HEvEnd","HEvCategoryRef","HEvImageRef","HEvLocation"

Write-Host "Done."
