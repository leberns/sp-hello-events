import * as React from 'react';
import { IEventsCollection } from '../../../../references';
import styles from './EventsList.module.scss';
import Event from '../event/Event';

export interface IEventsListProps {
  events: IEventsCollection;
}

export interface IEventsListState {
}

export default class EventsList extends React.Component<IEventsListProps, IEventsListState> {

  public render() {
    return (
      <div className={ styles.eventsList }>
        {this.props.events.map(event =>
          <Event key={event.id} event={event} />
        )}
      </div>
    );
  }
}
