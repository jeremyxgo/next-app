import { NextPage, NextPageWithLayout } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

declare module "next" {
  type NextPageWithLayout<Props = object, InitialProps = Props> = NextPage<
    Props,
    InitialProps
  > & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module "next/app" {
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
