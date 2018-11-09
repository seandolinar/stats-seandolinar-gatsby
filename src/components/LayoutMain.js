import React from 'react';
import AdSense from 'react-adsense';

import ErrorBoundary from './ErrorBoundary';

export default ({children, pageType}) => (<main
    className={'site-content ' + pageType}
>
    <div className="ra-column visible-desktop">
        <ErrorBoundary>
            <AdSense.Google
                client='ca-pub-9996180831969957'
                slot='2589150622'
                style={{ display: 'block', margin: 'auto' }}
                format='auto'
                responsive='true'
            />
        </ErrorBoundary>
    </div>
    <div className="ra-column visible-desktop right">
        <ErrorBoundary>
            <AdSense.Google
                client='ca-pub-9996180831969957'
                slot='9693615028'
                style={{ display: 'block', margin: 'auto' }}
                format='auto'
                responsive='true'
            />
        </ErrorBoundary>
    </div>
    {children}
</main>)