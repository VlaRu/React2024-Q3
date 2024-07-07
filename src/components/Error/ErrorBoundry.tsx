import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    console.log(error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  reloadPage(): void {
    window.location.reload();
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>
          <button onClick={this.reloadPage}>return</button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
