import * as React from 'react';
import { IEventsCollection } from "../../../../references";
import { IEventsService } from '../../../../services/IEventsService';
import styles from './EventsListContainer.module.scss';
import EventsList from '../eventsList/EventsList';

export interface EventsListContainerProps {
  eventsService: IEventsService;
}

export interface EventsListContainerState {
  events: IEventsCollection;
  error: any;
}

export default class EventsListContainer extends React.Component<EventsListContainerProps, EventsListContainerState> {

  constructor(props: EventsListContainerProps) {
    super(props);
    this.state = {
      events: {items:[]},
      error: null
    };
  }

  public render() {

    let errorMessage = '';
    let stack = '';
    if(!!this.state.error) {
      errorMessage = !!this.state.error.message ? this.state.error.message : '';
      stack = !!this.state.error.stack ? this.state.error.stack : '';
    }

    return (
      this.state.error ? (
        <div className={ styles.eventsListContainer }>
          <div className={ styles.error }>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {errorMessage}
              <br />
              {stack}
            </details>
          </div>
        </div>
      ) : (
        <EventsList events={this.state.events} />
      )
    );
  }

  public async componentDidMount() {
    this.fetchEvents();
  }

  private async fetchEvents() {
    try {
      const eventsService = this.props.eventsService;
      const eventsColl = await eventsService.fetchEvents();
      this.setState({ events: eventsColl });
    }
    catch(error) {
      this.setState({
        error: error
      });
    }
  }

  public static getDerivedStateFromError(error: any) {
    return {
      error: error
    };
  }
}
