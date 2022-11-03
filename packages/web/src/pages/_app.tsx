import "styles/style.scss";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Preloader from "components/Elements/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return <>{!loading ? <Component {...pageProps} /> : <Preloader />}</>;
}
