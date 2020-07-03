import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-0000000-0');

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    const { location: { pathname } } = props;
    useEffect(() => trackPage(pathname), [pathname]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};


export default withTracker;
