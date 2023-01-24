import React from 'react';

import './Layout.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => <main>{children}</main>;

export default Layout;
