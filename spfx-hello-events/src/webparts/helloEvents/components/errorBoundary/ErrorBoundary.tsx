import * as React from 'react';

import styles from './ErrorBoundary.module.scss';
import { IErrorBoundaryState } from './IErrorBoundaryState';

export default class ErrorBoundary extends React.Component<any, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  public componentDidCatch (error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  // public static getDerivedStateFromError(error: any) {
  //   return {
  //     error
  //   };
  // }

  public render(): any {
    return (
      this.state.errorInfo ? (
        <div className={ styles.errorBoundary }>
          <div className={ styles.error }>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
        ) : (
          this.props.children
        )
    );
  }
}
