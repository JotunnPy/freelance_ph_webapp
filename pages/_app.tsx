import Layout from "../components/Layout";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
