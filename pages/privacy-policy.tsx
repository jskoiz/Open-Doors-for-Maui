import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Plausible from "@/components/Plausible";
import { motion } from "framer-motion";
import Head from "next/head";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "Privacy Policy · Open Doors for Maui",
    },
  };
}

export default function PrivacyPolicy({ pageTitle }) {
  return (
    <>
      <Head>
        <Plausible />
        <MetaTags title={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <Nav backUrl="/" />

      <div className="px-4 pt-[6vh] lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <p className="f1 extend">
            <motion.span className="text-stone-800" variants={item}>
              Privacy Policy <br />
            </motion.span>{" "}
          </p>
        </motion.div>
      </div>

      <div className="my-12 grid grid-flow-row grid-cols-1 gap-8 px-4 text-2xl leading-normal text-stone-600 sm:grid-cols-2 lg:px-8">
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">Data Collection</h3>
          <p>
            At Open Doors for Maui, we respect your privacy and do not collect
            any user data or cookies.
          </p>
          <p>
            The limited data collected by our software vendors, such as Vercel
            for web hosting and Formspree for form collection, is strictly for
            basic site authentication and counting how many times the site is
            visited.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">Web Analytics</h3>
          <p>
            Web analytics have been disabled because this project is now
            archived.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            Personal Information
          </h3>
          <p>
            The archived site does not load intake forms or analytics scripts.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            Hosting & Operations
          </h3>
          <p>
            Live hosting and operations have been disabled. This codebase is
            preserved for historical reference only.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">Contact Us</h3>
          <p>
            The original project contact channel is no longer advertised from
            this archived site.
          </p>
        </section>
      </div>
    </>
  );
}
