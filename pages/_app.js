import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/components/Layout/Layout.css";
import "@/components/Header/Header.css";
import "@/components/Navigation/Navigation.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);

  const toggleStateActive = () => {
    setActive(!isActive);
  };
  return (
    <Layout
      isActive={isActive}
      setActive={setActive}
      ontoggleStateActive={toggleStateActive}>
      <Component {...pageProps} />
    </Layout>
  );
}
