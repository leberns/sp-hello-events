# Saves the customizations made on a site as a template for the PnP Provisioning Engine

Write-Host "Provide the credentials to connect to the site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

$TraceLogFilePath = ".\save-template.log"
Write-Host "Setting trace log to log file $TraceLogFilePath ..."
Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

$SiteUrl = Read-Host "Template site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents)"

Write-Host "Connecting to the site $SiteUrl ..."
Connect-PnPOnline -Url $SiteUrl -Credentials $UserCredential

$TemplateFilePath = ".\hello-events-template-DRAFT.xml"
Write-Host "Saving the site structures to the template file $TemplateFilePath ..."
# list of possible handlers:
# https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Framework/Provisioning/Model/Handlers.cs
Get-PnPProvisioningTemplate -Out $TemplateFilePath -Handlers Fields,ContentTypes,Lists -ContentTypeGroups "_Hello Events"

$EventsLogoFilePath = ".\site-assets\hello-events-logo.png"
$EventsLogoTargetUrl = "SiteAssets"
Write-Host "Adding file references to the template..."
Add-PnPFileToProvisioningTemplate -Path $TemplateFilePath -Source $EventsLogoFilePath -Folder $EventsLogoTargetUrl -FileLevel Published -FileOverwrite:$true

Write-Host "Adding list items from the existing lists to the template..."

$EventCategoriesListTitle = "Event Categories"
Write-Host $EventCategoriesListTitle
Add-PnPDataRowsToProvisioningTemplate -Path $TemplateFilePath -List $EventCategoriesListTitle -Query "<View></View>" -Fields "Title"

$EventsListTitle = "Events Catalog"
Write-Host $EventsListTitle
Add-PnPDataRowsToProvisioningTemplate -Path $TemplateFilePath -List $EventsListTitle -Query "<View></View>" -Fields "Title","HEvDescription","HEvStart","HEvEnd","HEvCategoryRef","HEvImageRef","HEvLocation"

Write-Host "Done."
