import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import Head from "next/head";
import createEmotionCache from "@src/utils/createEmotionCache";
import { theme } from "@src/styles/theme";
import { setupAxios } from "@src/utils/setup-axios";
import { api, nextApi } from "@src/lib/axios";
import { wrapper } from "@src/store";
import { API_BASE_URL } from "@src/constants/api-base-url";
import { HOST_API_BASE_URL } from "@src/constants/host-api-base-url";
import { meApi } from "@src/hooks/get/me.api";
import { useDispatch } from "react-redux";
import { updateUser } from "@src/store/slices/profile";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function App(props: MyAppProps) {
  const dispatch = useDispatch();
  const token =
    typeof window === "undefined" ? "" : localStorage.getItem("token");
  useEffect(() => {
    if (!token) return;
    setupAxios({
      axiosInstance: api,
      baseUrl: API_BASE_URL,
      token,
    });

    meApi()
      .then((res) => {
        dispatch(updateUser(res.data));
      })
      .catch(console.log);
  }, [token]);

  useEffect(() => {
    setupAxios({ axiosInstance: nextApi, baseUrl: HOST_API_BASE_URL });
  }, []);

  // Use the layout defined at the page level, if available
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(App);
