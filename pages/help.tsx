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
      pageTitle: "Ways to Help · Open Doors for Maui",
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
        <p className="f1 extend">
          <motion.span className="text-stone-800" variants={item}>
            Ways to Help Maui
          </motion.span>{" "}
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        ></motion.div>
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
          <h3 className="text-lg font-bold text-stone-800">
            Where can I donate?
          </h3>
          <p>Here are some trusted organizations you can donate to:</p>
          <ul className="list-disc pl-5">
            <li>
              <Link
                href="https://www.hawaiicommunityfoundation.org/maui-strong"
                target="_blank"
                className="font-semibold"
              >
                Hawaii Community Foundation Maui Strong Fund
              </Link>
            </li>
            <li>
              <Link
                href="https://mauifoodbank.org/donate/"
                target="_blank"
                className="font-semibold"
              >
                Maui Foodbank
              </Link>
            </li>
            <li>
              <Link
                href="https://mauiunitedway.org/disasterrelief"
                target="_blank"
                className="font-semibold"
              >
                Maui United Way
              </Link>
            </li>
            <li>
              <Link
                href="https://www.memberplanet.com/campaign/cnhamembers/kakoomaui"
                target="_blank"
                className="font-semibold"
              >
                Council for Native Hawaiian Advnacement
              </Link>
            </li>
            <li>
              <Link
                href="https://www.mauihumanesociety.org/donate-olx/"
                target="_blank"
                className="font-semibold"
              >
                Maui Humane Society
              </Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">
            Emergency Shelter Needs
          </h3>
          <ul className="list-disc pl-5">
            <li>Bottled Water</li>
            <li>Hygiene items</li>
            <li>Slippers</li>
            <li>Underwear</li>
            <li>Large duffel bags</li>
            <li>Coolers</li>
            <li>Ice</li>
            <li>Storage Containers</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-stone-800">AVOID SCAMS</h3>
          <p>
            It's incredibly important to stay vigilant and informed, especially
            when you're looking to help those in need. To ensure that your
            hard-earned money goes to the right place and is used effectively,
            it's essential to be aware of potential scams.
          </p>
          <p>
            Here's a summarized and easy-to-follow guide based on the tips given
            by the Attorney General's office, cited from the Civil Beat:
          </p>
          <h3 className="text-lg font-bold text-stone-800">
            How to Avoid Donation Scams:
          </h3>
          <ol className="list-decimal pl-5">
            <li>
              <strong> Choose Trusted Charities:</strong>
              <ul className="list-disc pl-5">
                <li>Always opt for well-known charities.</li>
                <li>Beware of fake charities that pop up during crises.</li>
                <li>
                  Always verify a charity's authenticity through its official
                  website.
                </li>
                <li>
                  If donating due to a fundraiser's request on behalf of a
                  recognized charity, donate directly to that charity instead.
                </li>
              </ul>
            </li>
            <li>
              <strong>Verify Charity Legitimacy:</strong>
              <ul className="list-disc pl-5">
                <li>
                  Check if the charity is registered with the Department of the
                  Attorney General.
                </li>
                <li>
                  Use independent online sources for verification, such as:
                  <ul className="list-disc pl-5">
                    <li>
                      <Link
                        href="https://apps.irs.gov/app/eos/"
                        target="_blank"
                        className="font-semibold"
                      >
                        IRS Tax Exempt Organization Search
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.charitynavigator.org/"
                        target="_blank"
                        className="font-semibold"
                      >
                        Charity Navigator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://hbe.ehawaii.gov/documents/search.html"
                        target="_blank"
                        className="font-semibold"
                      >
                        DCCA Business Search
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong> Beware of Scammer Tactics:</strong>
              <ul className="list-disc pl-5">
                <li>
                  Pressure: Never allow someone to rush or pressure you into
                  donating.
                </li>
                <li>
                  Suspicious Payment Methods: Avoid charities that insist on
                  cash or gift card donations. Reputable charities will
                  typically accept credit cards and checks.
                </li>
                <li>
                  Misleading Names: Scammers often use names that sound very
                  similar to legitimate charities.
                </li>
                <li>
                  Vague Claims: Be skeptical of those who use emotional, vague
                  claims but can't provide specifics on how your donation will
                  be used.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Lastly, always trust your instincts. If something feels off or too
            good to be true, it probably is. Taking a few extra minutes to do
            some research can ensure that your generosity makes a real impact.
          </p>
        </section>
      </div>
    </>
  );
}
