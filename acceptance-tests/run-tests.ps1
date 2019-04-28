# Run the tests.
# Set the variables below according to your system:
$driverPath = "C:\Tools\chromedriver"
$outputPath = "C:\Dev\GitHub\leberns\sp-hello-events\acceptance-tests\results\output"
$loginDataFile = ".\login-data-local-workbench.csv"
#$loginDataFile = ".\login-data-SharePoint-workbench.csv"

# While setting the $loginDataFile variable:
# for the local workbench run SPFx with "gulp serve --nobrowser"
# for the SharePoint workbench run SPFx with "gulp serve"

# When performning the tests with SharePoint then provide the login credentials from a safe place.
# Here we are reading from a CSV file, but it would be better to read, for instance, from the
# Windows Credential Manager.
# https://gallery.technet.microsoft.com/scriptcenter/Accessing-Windows-7210ae91
$loginData = Import-Csv $loginDataFile -Delimiter ","
$url = $loginData.Url
$username = $loginData.Username
$password = $loginData.Password

$Env:path += ";$driverPath"

# Fewer logs are written regarding the keyword Login so that the username and password are better protected.
robot -d $outputPath -l $outputPath --variable url:$url --variable username:$username --variable password:$password hello-events-tests.robot
