import Layout from "../components/Layout";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/treescoco_logo_crop.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
