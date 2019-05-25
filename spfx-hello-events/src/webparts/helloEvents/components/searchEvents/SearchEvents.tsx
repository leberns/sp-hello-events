import * as React from 'react';
import styles from './SearchEvents.module.scss';

export interface ISearchEventsProps {
  initialExpression: string;
  executeSearchHandler: Function;
}

export interface ISearchEventsState {
  searchExpression: string;
}

export default class SearchEvent extends React.Component<ISearchEventsProps, ISearchEventsState> {
  constructor(props) {
    super(props);
    this.state = {
      searchExpression: this.props.initialExpression,
    };
  }

  private changeInput(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState({ searchExpression: value });
  }

  private executeSearch() {
    this.props.executeSearchHandler(this.state.searchExpression);
  }

  public render() {
    return (
      <div className={ styles.searchEvents }>
        <input type="text" autoFocus
          value={this.state.searchExpression}
          onChange={event => this.changeInput(event)}></input>
        <button onClick={() => this.executeSearch()}>Search</button>
      </div>
    );
  }
}
