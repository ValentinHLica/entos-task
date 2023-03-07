import React, { ReactNode } from "react";

import Footer from "@components/Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <main>{children}</main>

    <Footer />
  </>
);

export default Layout;
