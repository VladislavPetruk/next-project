import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
