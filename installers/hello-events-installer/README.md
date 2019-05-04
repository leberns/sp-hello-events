# Hello Events Installer

These scripts provision the structures and data needed for the Hello Events solution to work on a site.

It uses the PnP Provision Engine, for details see [PnP remote provisioning](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/pnp-remote-provisioning).

## Prerequisites

* Install the [PnP ProwerShell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps#installation)

For example, this would install the PnP PowerShell for SharePoint Online:

```PowerShell
Install-Module SharePointPnPPowerShellOnline
```

The PnP PowerShell is needed because the installer uses a few commands directly from it and because the PnP Provision Engine is also available from the PnP PowerShell.

* Organise an user which is site collection administrator in order to connect to SharePoint. It could be a tenant administrator for development. The credentials will be requested by the installer scripts.

## Creating the Provision Template

The site columns, site content types and lists are defined in a provision template. This template can be generated based on the structures of a given site and saved on a file for later use.

The script [`save-template.ps1`](./save-template.ps1) generates this template file.

Template file: [`hello-events-template.xml`](./hello-events-template.xml)

Note: as the template file is already part of the installer there is no need to execute this script every time again.

### Data Initialization

The default data like list items and files were added in a separeted step to the template, see [`save-template.ps1`](./save-template.ps1) for details.

This data is represented by DataRows and Files elements in the template file.

## Applying the Provision Template

Use the script [`set-template.ps1`](./set-template.ps1) to apply the template to a site.
