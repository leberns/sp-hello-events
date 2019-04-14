# SPFx Hello Events

## Development Notes

Please note that paths and URLs have to be changed according to your development environment.

## Development Tools and Extensions

* Visual Studio Code (also known as VS Code)
* SharePoint Framework

### Typescript React code snippets

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

Open the Workbench in a browser within your tenant, ex.:
```
https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/15/workbench.aspx
```
Add the "Hello Events" web part into the page 

### Debugging the Project with Visual Studio Code

It is possible to use an interactive debugger with VS Code to debug the web part.

As prerequisite, it is necessary to install an extension in VS Code for debugging with the proper browser.

For Google Chrome the extenson is [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome).

Also, it is necessary to edit launch.json (under .vscode/ folder) and set the url to your test site.

Changing
  `"url": "https://localhost:4321/temp/workbench.html",`
to
  `"url": "https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/workbench.aspx",`

* Run the project in Google Chrome

  `gulp serve --nobrowser`

* In VS Code, place a breakpoint in the source code and start the debugger (by pressing F5 or Debug > Start Debugging)

* Test the web part on a page and check the breakpoint

### NPM Packages

During development the packages were added to the solution by using the following NPM commands:

To install [PnPJS](https://github.com/pnp/pnpjs)
`npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp --save`

### Example of a Geolocation field

"{"EntityType":"LocalBusiness","LocationSource":"Bing","LocationUri":"https://www.bingapis.com/api/v6/localbusinesses/YN9003x12071253885138360471?setLang=de-CH","UniqueId":"https://www.bingapis.com/api/v6/localbusinesses/YN9003x12071253885138360471?setLang=de-CH","DisplayName":"Aktiengesellschaft Hallenstadion Zürich","Address":{"Street":"Wallisellenstrasse 45","City":"Zürich","CountryOrRegion":"CH","State":"Zürich","PostalCode":"8050"},"Coordinates":{"Latitude":47.4116096496582,"Longitude":8.55165958404541}}"
