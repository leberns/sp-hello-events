import * as React from 'react';
import Moment from 'react-moment';
import { escape } from '@microsoft/sp-lodash-subset';
import { IEvent } from '../../../../references';
import styles from './Event.module.scss';

export interface IEventProps {
  event: IEvent;
}

export interface IEventState {
}

export default class Event extends React.Component<IEventProps, IEventState> {
  constructor(props: IEventProps) {
    super(props);
  }

  public render() {
    return (
      <div className={ styles.event }>
        <div className={ styles.column1 }>
          <img src={ this.props.event.imageUrl } alt="Event Image"/>
        </div>
        <div className={ styles.column2 }>
          <h2>{ escape(this.props.event.title) }</h2>
          <p>{ escape(this.props.event.description) }</p>
          <div>
            <dl>
              <dt>When:</dt>
              <dd><Moment format="DD.MM.YYYY HH:mm">{ this.props.event.start }</Moment></dd>
            </dl>
            <dl>
              <dt>Where:</dt>
              <dd>{ this.props.event.location.name }</dd>
              <dd>{ this.props.event.location.street }</dd>
              <dd>{ this.props.event.location.city }, { this.props.event.location.country }</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
