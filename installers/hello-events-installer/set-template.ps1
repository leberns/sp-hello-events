# Applies the template to a site using the PnP Provision Engine

Function Import-ListItems($listTitle, $itemsFilePath) {
    # import the list items from the given template file ($itemsFilePath)
    # to the list ($listTitle), if there are no items in it

    Write-Host "Checking import of items to the list $listTitle ..."
    $items = Get-PnPListItem -List $listTitle -Query "<View><Query></Query></View>"
    if($items.Count -eq 0) {
        Write-Host "Importing items from '$itemsFilePath' to the list $listTitle ..."
        Apply-PnPProvisioningTemplate -Path $itemsFilePath    
    } else {
        Write-Host "There are already items on the list $listTitle, skipping import."
    }
}

Write-Host "Provide the credentials to connect to the target site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

$TraceLogFilePath = ".\set-template.log"
Write-Host "Setting trace log to log file $TraceLogFilePath ..."
Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

$TargetSiteUrl = Read-Host "Target site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents2)"
Write-Host "Connecting to the site $TargetSiteUrl ..."
Connect-PnPOnline -Url $TargetSiteUrl -Credentials $UserCredential

$TemplateFilePath = ".\hello-events-template.xml"
Write-Host "Applying template $TemplateFilePath ..."
Apply-PnPProvisioningTemplate -Path $TemplateFilePath

$EventsListTitle = "Events Catalog"
Write-Host "Removing Item content type from the list $EventsListTitle ..."
Remove-PnPContentTypeFromList -List $EventsListTitle -ContentType "Item"

$EventCategoriesListTitle = "Event Categories"
$EventCategoriesItemsFilePath = ".\event-categories-data.xml"
Import-ListItems $EventCategoriesListTitle $EventCategoriesItemsFilePath

$EventItemsFilePath = ".\events-data.xml"
Import-ListItems $EventsListTitle $EventItemsFilePath

Write-Host "Done."
