import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({ error, errorInfo });
        console.log("error=>", error);
        console.log("errorInfo=>", errorInfo);
    };

    render() {
        if (this.state.error) {
            return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
