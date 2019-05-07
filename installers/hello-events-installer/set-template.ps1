# Applies the template(s) to a site using the PnP Provision Engine

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

Function Import-ItemsToEmptyList($listTitle, $itemsFilePath) {
    Write-Host "Checking import of items to the list $listTitle ..."
    $list = Get-PnPList -Identity $listTitle
    if($list.ItemCount -eq 0) {
        Write-Host "Importing items from '$itemsFilePath' to the list $listTitle ..."
        Apply-PnPProvisioningTemplate -Path $itemsFilePath    
    } else {
        Write-Host "There are already items on the list $listTitle, skipping import."
    }
}

$EventsListTitle = "Events Catalog"
$EventItemsFilePath = ".\events-data.xml"
Import-ItemsToEmptyList $EventsListTitle $EventItemsFilePath

Write-Host "Done."
