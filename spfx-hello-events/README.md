# SPFx Hello Events

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
git clone the repo
npm i
npm i -g gulp
gulp build
```

### Running the Project

```
cd C:\Dev\GitHub\leberns\sp-hello-events\spfx-hello-events
gulp serve --nobrowser
```

Open the Workbench in a browser, for example:
```
https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/15/workbench.aspx
```
Add the "Hello Events" web part into the page 

### Debugging the Project with Visual Studio Code

It is possible to use the interactive debugger of VS Code to debug SharePoint Framework projects.

As a prerequisite, it is necessary to install an extension in VS Code for debugging with your respective browser, here we assume Google Chrome.

For Google Chrome the extenson is [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome). There are extensions for other browsers like Firefox or Edge, look for them at [Marketplace](https://marketplace.visualstudio.com).

It is also necessary to edit `launch.json` (under `.vscode/` folder) and set the url to your test site.

Changing `"url": "https://localhost:4321/temp/workbench.html",` to, for example: `"url": "https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/workbench.aspx",`

After these preparations start a debug session:

* Run the project with `gulp serve --nobrowser`

* In VS Code, place a breakpoint in the source code and start the debugger (by pressing F5 or Debug > Start Debugging)

* Test the web part with Google Chrome and check the breakpoint

### NPM Packages

The following packages were installed on the project using NPM:

* [PnPJS](https://github.com/pnp/pnpjs)

`npm install --save @pnp/logging @pnp/common @pnp/odata @pnp/sp`

* Jest, see [react-jest-testing](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-jest-testing)
```
npm install --save-dev jest jest-junit react-test-renderer sinon ts-jest
npm install --save-dev identity-obj-proxy
npm install --save-dev @types/jest
```

### Example of a Geolocation field

"{"EntityType":"LocalBusiness","LocationSource":"Bing","LocationUri":"https://www.bingapis.com/api/v6/localbusinesses/YN9003x12071253885138360471?setLang=de-CH","UniqueId":"https://www.bingapis.com/api/v6/localbusinesses/YN9003x12071253885138360471?setLang=de-CH","DisplayName":"Aktiengesellschaft Hallenstadion Zürich","Address":{"Street":"Wallisellenstrasse 45","City":"Zürich","CountryOrRegion":"CH","State":"Zürich","PostalCode":"8050"},"Coordinates":{"Latitude":47.4116096496582,"Longitude":8.55165958404541}}"
