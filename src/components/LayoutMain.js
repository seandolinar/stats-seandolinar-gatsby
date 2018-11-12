import React, { useState } from 'react';
import AdSense from 'react-adsense';

import MenuCategory from './MenuCategory';
import ButtonMenu from './ButtonMenu';

import ErrorBoundary from './ErrorBoundary';

export default ({children, pageType}) => {

    const [isMenuMobileOpen, setMenuOpen] = useState(false);


    return (<><div className="site-header-menu-mobile">
                  <ButtonMenu onClick={() => setMenuOpen(!isMenuMobileOpen)} isMenuOpen={isMenuMobileOpen}></ButtonMenu>
                </div>
                <div className="site-content-wrapper">
                  <MenuCategory isMenuMobileOpen={isMenuMobileOpen} />
                  <main
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
                    </main>
                </div></>)
}
