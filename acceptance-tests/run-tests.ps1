$driverPath = "C:\Tools\chromedriver"
$testResultsFolder = "C:\Dev\GitHub\leberns\sp-hello-events\acceptance-tests\results"

$Env:path += ";$driverPath"

robot -d $testResultsFolder hello-events-tests.robot
