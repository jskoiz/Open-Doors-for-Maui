import { Heading, Subheading } from "@/components/Heading";
import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Plausible from "@/components/Plausible";
import Head from "next/head";
import { useRouter } from "next/router";
import FilloutForm from "components/FormSeekingDonation";
import { motion } from "framer-motion";

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
      pageTitle: "Offer Hosting · Open Doors for Maui",
    },
  };
}

export default function JoinStep1({ pageTitle }) {
  const router = useRouter();
  const { r, edit } = router.query;

  return (
    <>
      <section className="flex flex-col gap-4">
        <Head>
          <Plausible />
          <MetaTags title={pageTitle} />
          <title>{pageTitle}</title>
        </Head>
        <Nav backUrl="/" />

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div
            className={`
      px-4
      pt-[6vh]
      md:flex-1
      lg:px-8
    `}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p className="f1 extend">
                <motion.span className="text-stone-800" variants={item}>
                  Request supplies
                </motion.span>{" "}
              </p>
              <h2>Fill out the form to request specific items you need. </h2>
              <p className="pt-2">
                For specific questions please email contact@opendoorsformaui.com
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center pb-10 md:flex-1">
            <FilloutForm />
          </div>
        </div>
      </section>
    </>
  );
}
