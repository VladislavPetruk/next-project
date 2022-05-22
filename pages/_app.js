import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import { motion } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => (
  <ThemeProvider attribute="class">
    <Layout>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        {" "}
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  </ThemeProvider>
);

export default MyApp;
