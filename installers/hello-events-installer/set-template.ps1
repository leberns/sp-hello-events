# Applies the template to a site using the PnP Provision Engine

$TemplateFilePath = ".\hello-events-template.xml"
$TraceLogFilePath = ".\set-template.log"
$TargetSiteUrl = Read-Host "Target site url (ex.: https://contoso.sharepoint.com/sites/CompanyEvents2)"

Write-Host "Provide the credentials to connect to the site as an administrator"
Write-Host "Ex.: JohnBlue@contoso.onmicrosoft.com"
$UserCredential = Get-Credential

Set-PnPTraceLog -On -Level Debug -LogFile $TraceLogFilePath

Connect-PnPOnline -Url $TargetSiteUrl -Credentials $UserCredential

Apply-PnPProvisioningTemplate -Path $TemplateFilePath

Write-Host "Done."
