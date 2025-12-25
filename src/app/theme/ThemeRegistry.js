"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { useServerInsertedHTML } from "next/navigation";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/app/theme/theme";

function createEmotionCache() {
  return createCache({
    key: "mui-rtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
}

export default function ThemeRegistry({ children }) {
  const cache = React.useMemo(() => createEmotionCache(), []);
  const prevInsert = React.useRef(null);

  useServerInsertedHTML(() => {
    const inserted = Object.entries(cache.inserted);

    prevInsert.current = inserted;

    return (
      <style
        data-emotion={`${cache.key} ${inserted
          .map(([key]) => key)
          .join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: inserted
            .map(([, value]) => value)
            .join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
