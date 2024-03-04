import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { Helmet } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
    <Helmet>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script>
              { 
                // @ts-ignore 
                (adsbygoogle = window.adsbygoogle || []).push({})
            }
            </script>
            {/* paste script code in between Tilde  */}
          </Helmet>
  </StrictMode>,
);
