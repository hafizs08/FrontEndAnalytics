import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.logErrorToServer(error, errorInfo);
  }

  logErrorToServer = (error, errorInfo) => {
    fetch('http://localhost:8091/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: error.toString(),
        stack: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href,
      }),
    }).catch(console.error);
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
