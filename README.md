﻿# SharePoint Hello Events

## Motivation

This project demonstrates a couple of development techniques within the modern SharePoint.

It is relatively common that solutions to manage Events or News within an organization are implemented on top of SharePoint. This project implements an Events management solution, but many concepts could be well used to implement a News solution.

## Main Project Items

Item|Description
----|-----------
[Hello Events Installer](./installers/hello-events-installer) | Installer
[SPFx Hello Events](./spfx-hello-events) | SharePoint Framework Solution to manage events
[User stories and tasks](https://github.com/leberns/sp-hello-events/projects) | Project planning
[Acceptance tests](https://github.com/leberns/sp-hello-events/tree/master/acceptance-tests) | End to end tests based on the user stories

## Features

This project uses to following development concepts and resources.

- SharePoint Framework client-side web part implemented with React
- Asynchronous calls synchronized by using the async / await keywords instead of explicit promises
- Debugging with Visual Studio Code, refer to the topic [here](https://github.com/leberns/sp-hello-events/wiki/Debugging-a-SPFx-Project-with-Visual-Studio-Code)
- Unit Testing, refer to the topic [here](https://github.com/leberns/sp-hello-events/wiki/Jest-Testing-a-SPFx-Project)
- End to End Tests, refer to the topic [here](https://github.com/leberns/sp-hello-events/wiki/Robot-Framework-for-End-to-End-Tests-on-SharePoint-Framework)
- Remote provisioning using the PnP Provisioning Engine, refer to the [Hello Events Installer](https://github.com/leberns/sp-hello-events/blob/master/installers/hello-events-installer)
- Design patterns: Separation of responsabilities, Inversion of control
- React components:
    - Container and Error Boundary Components
    - Visualization Components

- Libraries and external resources:
  - [PnP/PnPJs](https://pnp.github.io/pnpjs/): PnPjs is a collection of fluent libraries for consuming SharePoint, Graph, and Office 365 REST APIs in a type-safe way  
  - [Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react): Fabric React is a collection of robust React-based components designed to make it simple for you to create consistent web experiences

### Demo Images

**Client side web part Hello Events** from [SPFx Hello Events](./spfx-hello-events):

![image](./images/hello-events-web-part.png)

**Hello Events web part item:**

![image](./images/hello-events-web-part-item.png)

**[Jest tests](https://github.com/leberns/sp-hello-events/wiki/Jest-Testing-a-SPFx-Project) example:**

![image](./images/jest-tests-example.png)

**[Acceptance tests](https://github.com/leberns/sp-hello-events/wiki/Robot-Framework-for-End-to-End-Tests-on-SharePoint-Framework) example:**

![image](./images/acceptance-tests-example.png)

## Version History

Version|Date|Comments
-------|----|--------
0.0.1 | 26th April 2019 | display events from an Events Catalog list
0.0.2 | 04th May 2019 | implemented an installer based on the PnP Provisioning Engine
