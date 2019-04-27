import * as React from 'react';
import styles from './HelloEvents.module.scss';
import { IHelloEventsProps } from './IHelloEventsProps';
import { IHelloEventsState } from './IHelloEventsState';
import EventsListContainer from '../eventsListContainer/EventsListContainer';

export default class HelloEvents extends React.Component<IHelloEventsProps, IHelloEventsState> {
  public render(): React.ReactElement<IHelloEventsProps> {
    return (
      <EventsListContainer
        updateAppStatus={this.props.updateAppStatus}
        eventsService={this.props.eventsService} />
    );
  }
}
