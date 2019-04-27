# End to End Tests with SharePoint with Robot Framework

## Motivation

The Robot Framework allows scripted UI testing as on the perspective of the end users.
That means that distinct HTML elements of the page are available for the robot to interact with or perform checks.

As per the [Quick Start](https://github.com/robotframework/QuickStartGuide/blob/master/QuickStart.rst) the
"Robot Framework is a generic open source test automation framework for acceptance testing and acceptance test-driven development (ATDD)."

## Prerequisites

### Installing the Robot Framework and Dependencies

Please follow the instructions at [robotframework/INSTALL.rst](https://github.com/robotframework/robotframework/blob/master/INSTALL.rst)

#### Overview for Windows 

* Install [IronPython](https://github.com/IronLanguages) (version 2)

* Add to the system PATH (adjust the path according to the IronPython version):
  * C:\Program Files\IronPython 2.7
  * C:\Program Files\IronPython 2.7\Scripts

Run the commands on a PowerShell prompt with "Run as Administrator".

* Install the Robot Framework with:

```PowerShell
ipy -m pip install robotframework`
```

* Install the [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) and further dependencies for tests with browsers (here we are just testing with Chrome):

```PowerShell
pip install --upgrade robotframework-seleniumlibrary
pip install webdrivermanager
```

* Download and place the [Chrome Driver](http://chromedriver.chromium.org/downloads) in a given location on your system. Here it was: `C:\Tools\chromedriver`.

* Update the PowerShell script `run-tests.ps1` located in the folder `acceptance-testing` to set the path to the Chrome Driver

## Running the Tests

Note: the SharePoint Framework solution **has be running** with `gulp serve` or `gulp serve --nobrowser`, as usual, before running these tests.

```PowerShell
cd C:\Dev\GitHub\leberns\sp-hello-events\acceptance-testing
.\run-tests.ps1
```

## Writing the Tests


