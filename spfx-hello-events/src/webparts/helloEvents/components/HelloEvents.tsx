import * as React from 'react';
import styles from './HelloEvents.module.scss';
import { IHelloEventsProps } from './IHelloEventsProps';
import { IHelloEventsState } from './IHelloEventsState';
import EventsList from './eventsList/EventsList';

export default class HelloEvents extends React.Component<IHelloEventsProps, IHelloEventsState> {

  constructor(props: IHelloEventsProps) {
    super(props);
    this.state = {
      events:  {items:[]},
      error: null
    };
  }

  public render(): React.ReactElement<IHelloEventsProps> {

    return (
      <EventsList events={this.state.events} />
    );
  }

  public componentDidMount() {
    this.fetchEvents();
  }

  private async fetchEvents() {
    const eventsService = this.props.eventsService;
    try {
      const eventsColl = await eventsService.fetchEvents();
      this.setState({ events: eventsColl });
    }
    catch(error) {
      this.setState({ error: error });
    }
  }
}
