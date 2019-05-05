# Saves the customizations made on a site as a template for the PnP Provision Engine

Write-Host "Provide the credentials to connect to the site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

$TraceLogFilePath = ".\save-template.log"
Write-Host "Setting trace log to log file $TraceLogFilePath ..."
Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

$TemplateSiteUrl = Read-Host "Template site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents)"
Write-Host "Connecting to the site $TargetSiteUrl ..."
Connect-PnPOnline -Url $TemplateSiteUrl -Credentials $UserCredential

$TemplateFilePath = ".\hello-events-template-DRAFT.xml"
Write-Host "Saving the site structures to the template file $TemplateFilePath ..."
# list of possible handlers:
# https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Framework/Provisioning/Model/Handlers.cs
Get-PnPProvisioningTemplate -Out $TemplateFilePath -Handlers Fields,ContentTypes,Lists -ContentTypeGroups "_Hello Events"

$EventsLogoFilePath = ".\site-assets\hello-events-logo.png"
$EventsLogoTargetUrl = "SiteAssets"
Write-Host "Adding file references to the template; elements: Files / File ..."
Add-PnPFileToProvisioningTemplate -Path $TemplateFilePath -Source $EventsLogoFilePath -Folder $EventsLogoTargetUrl -FileLevel Published -FileOverwrite:$true

$EventCategoriesListTitle = "Event Categories"
$EventCategoriesItemsFilePath = ".\event-categories-data-DRAFT.xml"
Write-Host "Adding list items from the existing $EventCategoriesListTitle list to the template; element DataRows / DataRow ..."
Add-PnPDataRowsToProvisioningTemplate -Path $EventCategoriesItemsFilePath -List $EventCategoriesListTitle -Query "<View></View>" -Fields "Title"

$EventsListTitle = "Events Catalog"
$EventItemsFilePath = ".\events-data-DRAFT.xml"
Write-Host "Adding list items from the existing $EventsListTitle list to the template; element DataRows / DataRow ..."
Add-PnPDataRowsToProvisioningTemplate -Path $EventItemsFilePath -List $EventsListTitle -Query "<View></View>" -Fields "Title","HEvDescription","HEvStart","HEvEnd","HEvCategoryRef","HEvImageRef","HEvLocation"

Write-Host "Done."
