import React from 'react';

import './Layout.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <main className="d-flex align-items-center justify-content-center">{children}</main>
);

export default Layout;
