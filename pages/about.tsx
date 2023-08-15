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
              Open Doors for Maui <br></br>
              <h2>
                is a community directory created to help connect those displaced
                by the fires on Maui and a{" "}
                <strong className="font-semibold text-stone-800">
                  free to use platform for community organizations to streamline
                  their recovery efforts.
                </strong>
              </h2>
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
            ODFM (Open Doors for Maui) is a community maintained directory where
            anyone affected by the Maui wildfires can easily share their
            information discretely to be matched with available housing or
            supplies.
          </p>
          <p>
            It serves as an open and free platform for community organizations
            to streamline their recovery effort by directing their inquiries to
            ODFM they can then easily manage and track requests from a secure
            and easy to use dashboard.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            This is a free platform and tool for all organizations involved in
            the recovery efforts of Maui.
          </h3>
          <p>
            ODFM is designed to facilitate inquiries from all parts of the
            community efficiently and securely. If your organization would like
            to make use of the platform:
          </p>

          <ul className="list-disc pl-5">
            <li>
              Direct your community to send their inquiries in via{" "}
              <Link href="/" target="_blank" className="font-semibold">
                opendoorsformaui.com
              </Link>{" "}
            </li>
            <li>
              Have an administrator request secure access to the platform by
              completing{" "}
              <Link
                href="https://form.fillout.com/t/sRrjMRNfjfus"
                target="_blank"
                className="font-semibold"
              >
                this access request form
              </Link>
              .
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            For those offering shelter or donations of supplies:
          </h3>
          <p>
            Please use the relevant forms to share detailed information about
            your available space or intended donation. If you have additional
            questions please email contact@opendoorsformaui.com
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            If you need shelter or supplies:
          </h3>
          <p>
            For housing request please fill out the{" "}
            <Link
              href="/find-hosting"
              target="_blank"
              className="font-semibold"
            >
              shelter request form
            </Link>
            . If you need supplies you can share details about your specific
            needs and where you can comfortably pick them up on the{" "}
            <Link
              href="/find-supplies"
              target="_blank"
              className="font-semibold"
            >
              supplies request form
            </Link>
            .{" "}
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            How did you come up with this idea?
          </h3>
          <p>
            We want to help anyway we can. There are too many stories of people
            with resources unable to connect with those who need them, or
            displaced community members unable to connect with hosts willing to
            open their home. We want to connect everyone who can help, to those
            who need it.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">Who built this?</h3>
          <p>
            This site was created with the intention to help connect families in
            dire need with individuals and entities capable of assisting. It is
            built by{" "}
            <Link
              href="https://www.avmillabs.com"
              target="_blank"
              className="font-semibold"
            >
              AVMIL Labs
            </Link>{" "}
            and any other community members who are willing to contribute.
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
              href="https://github.com/jskoiz/Open-Doors-for-Maui"
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
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            How can I update my profile? Or remove myself altogether?
          </h3>
          <p>
            Changes, including removal from the list, can be requested via email
            at&nbsp;
            <Link href="/edit" className="font-semibold">
              contact@opendoorsformaui.com
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
