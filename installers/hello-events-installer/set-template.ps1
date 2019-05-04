# Applies the template to a site using the PnP Provision Engine

$TemplateFilePath = ".\hello-events-template.xml"
$TraceLogFilePath = ".\set-template.log"
$TargetSiteUrl = Read-Host "Target site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents2)"

Write-Host "Provide the credentials to connect to the target site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

Write-Host "Settings trace log..."
Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

Write-Host "Connecting to the site..."
Connect-PnPOnline -Url $TargetSiteUrl -Credentials $UserCredential

Write-Host "Applying template..."
Apply-PnPProvisioningTemplate -Path $TemplateFilePath

Write-Host "Done."
