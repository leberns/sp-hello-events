# SharePoint Hello Events

## General Notice

The documentation and the project are still in an very early phase and heavy under construction.

## Motivation

This project demonstrates a couple of development techniques within the modern SharePoint.

It is relatively common that solutions to manage Events or News within an organization are implemented on top of SharePoint. This project implements an Events management solution, but many concepts could be well used to implement a News solution.

## User Stories

* [x] display events from an Events list (version 0.0.1)
* [ ] aggregate events from many Events lists
* [ ] display map with event location
* [ ] filter events
* [ ] field customizer: select the image with a lookup and render it in a list view 
* [ ] subscribe button
* [ ] subscription questions with Survey
* [ ] events by search API
* [ ] add event to user calender (MSGraphClient)

## Main Project Items

* Hello Events Installer (under construction)
* [SPFx Hello Events](./spfx-hello-events)

## Features

This project uses to following development concepts and resources.

- Development methods and techniques:
  - SharePoint Framework client-side web part implemented with React
  - Asynchronous calls synchronized by using the async / await keywords instead of explicit promises
  - Debugging with Visual Studio Code, refer to the topic [here](https://github.com/leberns/sp-hello-events/wiki/Debugging-a-SPFx-Project-with-Visual-Studio-Code)
  - Unit Testing, refer to the topic [here](https://github.com/leberns/sp-hello-events/wiki/Jest-Testing-a-SPFx-Project)
  - Design patterns: Separation of responsabilities, Inversion of control
  - React components:
    - Container and Error Boundary Components
    - Visualization Components

- Libraries and external resources:
  - [PnP/PnPJs](https://pnp.github.io/pnpjs/): PnPjs is a collection of fluent libraries for consuming SharePoint, Graph, and Office 365 REST APIs in a type-safe way  
  - [Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react): Fabric React is a collection of robust React-based components designed to make it simple for you to create consistent web experiences
