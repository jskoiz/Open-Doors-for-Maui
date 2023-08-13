import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Plausible from "@/components/Plausible";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

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

export const DISCORD_URL = "https://opendoorsformaui.org/discord";

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "About · Open Doors for Maui",
    },
  };
}

export default function AboutPage({ pageTitle }) {
  return (
    <>
      <Head>
        <Plausible />
        <MetaTags title={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <Nav backUrl="/" />

      <div
        className={`
          px-4
          pt-[6vh]
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
              Open Doors for Maui <br></br>is a community built directory
              created to help connect those displaced by the fires on Maui with
              individuals and organizations who can help.
            </motion.span>{" "}
          </p>
        </motion.div>
      </div>

      <div
        className={`
          my-12
          grid
          grid-flow-row
          grid-cols-1
          gap-8
          px-4
          text-2xl
          leading-normal
          text-stone-600
          sm:grid-cols-2
          lg:px-8
        `}
      >
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">What is this?</h3>
          <p>
            ODFM (Open Doors for Maui) is a living directory where anyone
            affected and seeking shelter can easily share their information with
            the relevant organizations
          </p>
          <p>
            The objective is to display the genuine needs of the affected
            community and the available resources in a transparent way, while
            ensuring sensitive user data is protected and not misused.
          </p>
          <p>
            This platform is designed with privacy of users as the priority. All
            personally identifiable information shared is privately and securely
            stored. This data is only meant to be aggregated and shared with
            organizations operating in an official capacity to assist those
            affected by the disaster.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            For those willing to host.
          </h3>
          <p>
            Hosts can submit their details, including the number of people they
            can accommodate, as well as the duration of stay they can provide.
          </p>
          <ul className="list-disc pl-5">
            <li>
              Public Listing: Only the host's first name, last initial,
              generalized location, and the capacity (whether they can host an
              individual or a family) are displayed publicly.
            </li>
            <li>
              Privacy: All other personal details are kept private and are only
              shared with approved organizations that can assist.
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            For Shelter Seekers:
          </h3>
          <p>
            Individuals or families in need can provide their details, including
            family size and whether or not they are able to relocate to another
            island. This information is then shared with relevant organizations
            assisting in relocating efforts to match with currently available
            housing.
          </p>{" "}
          <ul className="list-disc pl-5">
            <li>
              Public Details: only first name, last initial, current general
              location, and need designation (individual or family) are listed
              publicly.
            </li>
            <li>
              Privacy: All other personal details are kept private and are only
              shared with approved organizations that can assist.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            Who can list available space on this app for emergency housing due
            to the Maui fires?
          </h3>
          <p>
            Hotel groups, companies, and individuals with available space are
            all encouraged to share their willingness to help. Our aim is
            facilitate connections between those who have accommodations to
            offer with those impacted by the Maui fires in need of emergency
            housing by aggregating and organizing this information.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            How did you come up with this idea?
          </h3>
          <p>
            We want to help anyway we can, after watching the new conference on
            8/10 where Gov Green explained the need to help shelter those
            affected we were inspired to leverage our knowledge and skills to
            facilitate that.{" "}
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            How did you build this?
          </h3>
          <p>
            It is an adaption of{" "}
            <Link
              target="_blank"
              href="https://hawaiiansintech.org/"
              className="font-semibold"
            >
              Hawaiians in Tech
            </Link>{" "}
            - a directory and community of Native Hawaiians in tech created by{" "}
            <Link
              href="https://www.linkedin.com/in/emmit-parubrub/?source=about"
              target="_blank"
              className="font-semibold"
            >
              Emmit Parubrub
            </Link>
            &nbsp;&&nbsp;
            <Link
              href="https://linkedin.com/in/taylorho/?source=about"
              target="_blank"
              className="font-semibold"
            >
              Taylor Ho
            </Link>
            . The repo for Open Doors for Maui can be found{" "}
            <Link
              target="_blank"
              href="https://github.com/jskoiz/opendoorsformaui"
              className="font-semibold"
            >
              here
            </Link>{" "}
            .
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            How can I get more involved with the community?
          </h3>
          <p>
            Contributors are welcome and encouraged to request access to the{" "}
            <Link
              target="_blank"
              href="https://github.com/jskoiz/opendoorsformaui"
              className="font-semibold"
            >
              GitHub Repo
            </Link>
            .
          </p>
          <p>
            Open Doors for Maui is a grassroots project built in the hopes of
            helping those in need. We do not accept any donations and ask that
            those be directed to organizations detailed{" "}
            <Link
              href={`https://www.civilbeat.org/2023/08/help-maui-fire-victims-heres-how-you-can-donate/`}
              target="_blank"
              className="font-semibold"
            >
              here
            </Link>{" "}
            .
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">Who built this?</h3>
          <p>
            This site was created with the intention to help connect families in
            dire need with individuals and entities capable of assisting by{" "}
            <Link
              href="https://www.linkedin.com/in/jerrykoizumi/?source=about"
              target="_blank"
              className="font-semibold"
            >
              Jerry Koizumi Jr.
            </Link>{" "}
            and any other community members who are willing to contribute.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            How can I update my profile? Or remove myself altogether?
          </h3>
          <p>
            Changes, including removal from the list, can be{" "}
            <Link href="/edit" className="font-semibold">
              requested here
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
