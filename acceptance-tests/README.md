# End to End Tests with Robot Framework

## Motivation

The Robot Framework allows us to script tests in the browser using the perspective of the end users.
That means that distinct HTML elements of the page are available for the robot to interact with or perform checks.

As per the [Quick Start](https://github.com/robotframework/QuickStartGuide/blob/master/QuickStart.rst):
"Robot Framework is a generic open source test automation framework for acceptance testing and acceptance test-driven development (ATDD)."

## Prerequisites

### Installing the Robot Framework and Dependencies

Please follow the instructions at [robotframework/INSTALL.rst](https://github.com/robotframework/robotframework/blob/master/INSTALL.rst)

#### Overview for Windows 

Install IronPython

Set the PATH to (adjust the path according to the IronPython version):
  * C:\Program Files\IronPython 2.7
  * C:\Program Files\IronPython 2.7\Scripts

Install the Robot Framework with:

```PowerShell
ipy -m pip install robotframework`
```

Install the [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) and further dependencies for tests with browsers (here we are just testing with Chrome):

```PowerShell
pip install --upgrade robotframework-seleniumlibrary
pip install webdrivermanager
webdrivermanager chrome
```
## Running the Tests

```PowerShell
cd C:\Dev\GitHub\leberns\sp-hello-events\acceptance-testing
pybot.bat events-uc.robot
```

## Writing the Tests


