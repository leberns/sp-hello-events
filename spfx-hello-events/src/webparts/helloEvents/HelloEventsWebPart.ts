import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';

import { sp } from "@pnp/sp";
import { override } from '@microsoft/decorators';

import * as strings from 'HelloEventsWebPartStrings';
import HelloEvents from './components/helloEvents/HelloEvents';
import { IHelloEventsProps } from './components/helloEvents/IHelloEventsProps';
import { ServicesFactory } from '../../services/ServicesFactory';
import { IEventsService } from '../../services/events/IEventsService';

export interface IHelloEventsWebPartProps {
}

export default class HelloEventsWebPart extends BaseClientSideWebPart<IHelloEventsWebPartProps> {

  private eventsService: IEventsService;

  @override
  public onInit(): Promise<void> {
    sp.setup({
        spfxContext: this.context
    });

    const servicesFactory = new ServicesFactory();
    const isLocalEnvironment = Environment.type === EnvironmentType.Local;
    servicesFactory.setIsMocking(isLocalEnvironment);
    this.eventsService = servicesFactory.createEventService();

    return Promise.resolve();
  }

  public render(): void {
    const element: React.ReactElement<IHelloEventsProps > = React.createElement(
      HelloEvents, {
        eventsService: this.eventsService
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
              ]
            }
          ]
        }
      ]
    };
  }
}
