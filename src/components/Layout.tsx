import React, { ReactNode } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />

    <main>{children}</main>

    <Footer />
  </>
);

export default Layout;
