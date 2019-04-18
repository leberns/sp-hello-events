Go to [Topmost Project README](../README.md)

# SPFx Hello Events

## Purpose

This SharePoint Framework project implements a web part to display the events as loaded from a list of events in SharePoint.

## Prerequisites

The list of events should already exist on the site.

## Development Notes

Please note that paths and URLs have to be changed according to your development environment.

### Development Tools and Extensions

* Browser for the development: Google Chrome
* Visual Studio Code (also referenced in this project as VS Code)
* SharePoint Framework

#### Typescript React code snippets

This is an extension for Visual Studio Code which helps generating boilerplate React code through code snippets.

https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript

### Building the Code

```
cd C:\Dev\GitHub\leberns
git clone https://github.com/leberns/sp-hello-events.git
npm install
npm install -g gulp
gulp build
```

### Running the Project

`cd C:\Dev\GitHub\leberns\sp-hello-events\spfx-hello-events`

`gulp serve --nobrowser`

Open the Workbench in a browser, for example:

`https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/15/workbench.aspx`

or, to test locally without SharePoint (this offers limited functionality):

`gulp serve`

Add the "Hello Events" web part into the page 

### Debugging the Project with Visual Studio Code

It is possible to use the interactive debugger of VS Code to debug SharePoint Framework projects.

As a prerequisite, it is necessary to install an extension in VS Code for debugging with your respective browser, here we assume Google Chrome.

For Google Chrome the extenson is [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome). There are extensions for other browsers like Firefox or Edge, look for them at [Marketplace](https://marketplace.visualstudio.com).

It is also necessary to edit `launch.json` (under `.vscode/` folder) and set the url to your test site.

Changing `"url": "https://localhost:4321/temp/workbench.html",` to, for example: `"url": "https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/workbench.aspx",`

To start a debug session after these preparations are done:

* Run the project with `gulp serve --nobrowser`

* In VS Code: place a breakpoint in the source code and start the debugger (by pressing F5 or Debug > Start Debugging)

* Test the web part with Google Chrome and check the breakpoint

### Unit-Testing

Refer to the topic [Testing a SharePoint Framework Project with Jest](./testing-spfx-with-jest.md) for a description about how tests were configured, written and performed.

### NPM Packages

The following packages were installed on the project using NPM:

* [PnPJS](https://github.com/pnp/pnpjs)

`npm install --save @pnp/logging @pnp/common @pnp/odata @pnp/sp`

* [React Moment](https://www.npmjs.com/package/react-moment)

`npm install --save npm install --save ajv@^6.9.1 moment react-moment`

* Jest, for details see the topic [Testing a SharePoint Framework Project with Jest](./testing-spfx-with-jest.md)
