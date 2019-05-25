import * as React from 'react';
import { IHelloEventsProps } from './IHelloEventsProps';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import EventsListContainer from '../eventsListContainer/EventsListContainer';

export default class HelloEvents extends React.Component<IHelloEventsProps, {}> {
  public render(): React.ReactElement<IHelloEventsProps> {
    return (
      <ErrorBoundary>
        <EventsListContainer eventsService={this.props.eventsService} />
      </ErrorBoundary>
    );
  }
}
