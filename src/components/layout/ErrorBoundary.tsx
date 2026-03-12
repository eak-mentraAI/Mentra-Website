import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 px-4">
          <div className="text-center max-w-md">
            <img
              src="/images/sprig/sprig-hero.png"
              alt="Sprig"
              width="96"
              height="96"
              className="w-24 h-24 mx-auto mb-6 opacity-60"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We hit an unexpected bump. Try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
