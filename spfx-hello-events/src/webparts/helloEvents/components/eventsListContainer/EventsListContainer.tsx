import * as React from 'react';
import { IEventsCollection } from "../../../../references";
import { IEventsService } from '../../../../services/events/IEventsService';
import styles from './EventsListContainer.module.scss';
import SearchEvents from '../searchEvents/SearchEvents';
import EventsList from '../eventsList/EventsList';

export interface EventsListContainerProps {
  eventsService: IEventsService;
}

export interface EventsListContainerState {
  events: IEventsCollection;
  filteredEvents: IEventsCollection;
}

export default class EventsListContainer extends React.Component<EventsListContainerProps, EventsListContainerState> {

  constructor(props: EventsListContainerProps) {
    super(props);
    this.state = {
      events: [],
      filteredEvents: []
    };
  }

  private executeSearch(searchExpression: string) {
    const matchingEvents = this.state.events.filter(
      event => event.title.toLowerCase().indexOf(searchExpression.toLowerCase()) !== -1
    );
    this.setState({
      filteredEvents: matchingEvents
    });
  }

  public render() {
    return (
      <div>
        <SearchEvents initialExpression={''} executeSearchHandler={(searchExpression: string) => this.executeSearch(searchExpression)}></SearchEvents>
        <EventsList events={this.state.filteredEvents} />
      </div>
    );
  }

  public async componentDidMount() {
    this.fetchEvents();
  }

  private async fetchEvents() {
    const eventsService = this.props.eventsService;
    const events = await eventsService.fetchEvents();
    this.setState({
      events,
      filteredEvents: events
    });
  }
}
