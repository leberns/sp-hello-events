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

[Typescript React code snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript) is an extension for Visual Studio Code which helps generating boilerplate React code through code snippets.

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

`npm test`

`gulp serve --nobrowser`

Open the Workbench in a browser, for example:

`https://contoso.sharepoint.com/sites/CompanyEvents/_layouts/15/workbench.aspx`

or, to test locally without SharePoint (this offers limited functionality):

`gulp serve`

Add the "Hello Events" web part into the page 

### Debugging the Project with Visual Studio Code

Visit the topic [Debugging a SPFx Project with Visual Studio Code](https://github.com/leberns/sp-hello-events/wiki/Debugging-a-SPFx-Project-with-Visual-Studio-Code) for more details.

### Unit Testing

Refer to the topic [Jest Testing a SPFx Project](https://github.com/leberns/sp-hello-events/wiki/Jest-Testing-a-SPFx-Project) for a description about how tests were configured, written and performed.

### NPM Packages

The following packages were installed on the project:

* React 16.7.22 Types for TypeScript

`npm install @types/react@16.7.22 --save-dev --save-exact`

* TypeScript 3.3 and rush-stack-compiler

`npm install @microsoft/rush-stack-compiler-3.3@0.1.6 typescript@3.3 --save-dev --save-exact`

Note 1: when changing the TypeScript version of your solution it is necessary to update the file `tsconfig.json` located in the solution root folder. Update the reference to the `rush-stack-compiler` in the `extends` property. Ex.:

`"extends": "./node_modules/@microsoft/rush-stack-compiler-3.3/includes/tsconfig-web.json",`

Read more here [Andrew Connell: Support for TypeScript v2.7, v2.9 & v3.x (from v2.4.2)](http://www.andrewconnell.com/blog/sharepoint-framework-v1-8-0-what-s-in-the-latest-update-of-spfx#support-for-typescript)

Note 2: update the TypeScript version was necessary because the type declarations found on React types (installed before) and Jest (installed below) used the syntax of a higher TypeScript version. Example of transpilation errors:

```
gulp build
...
Error - [tsc] node_modules/@jest/console/build/BufferedConsole.d.ts(17,146): error TS1144: '{' or ';' expected.
...
Error - [tsc] node_modules/@types/react/index.d.ts(2664,5): error TS1128: Declaration or statement expected.
...
Error - [tsc] node_modules/jest/node_modules/jest-cli/build/index.d.ts(104,70): error TS1005: ',' expected.
```

* [PnPJS](https://github.com/pnp/pnpjs)

`npm install --save @pnp/logging @pnp/common @pnp/odata @pnp/sp`

* [React Moment](https://www.npmjs.com/package/react-moment)

`npm install --save ajv@^6.9.1 moment react-moment`

* Jest, for details see the topic [Jest Testing a SPFx Project](https://github.com/leberns/sp-hello-events/wiki/Jest-Testing-a-SPFx-Project)
