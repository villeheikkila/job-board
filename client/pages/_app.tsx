import React from 'react';
import App from 'next/app';
import '../tailwind.css';
import withApollo from '../apollo/apollo';

class Wrapper extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default withApollo(Wrapper);
