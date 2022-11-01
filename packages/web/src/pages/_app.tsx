// import "../public/assets/css/app.2afad0c.bundle.css";
// import "../public/assets/css/swiper-custom.css";
import "styles/style.scss";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
