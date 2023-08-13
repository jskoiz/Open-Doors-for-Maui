import { AccordionLink } from "@/components/Accordion";
import { DISCORD_URL } from "@/pages/about";

export const CONTACT_METHODS: { label: string; body: React.ReactNode }[] = [
  {
    label: "Connect on LinkedIn",
    body: (
      <>
        <p>
          Who doesn't have a Linkedin, right? Connect and mention it in the
          message!
        </p>
        <AccordionLink href="https://www.linkedin.com/in/emmit-parubrub/">
          Emmit Parubrub
        </AccordionLink>
        <AccordionLink href="https://www.linkedin.com/in/taylorho/">
          Taylor Ho
        </AccordionLink>
        <AccordionLink href="https://www.linkedin.com/in/andrewtaeoalii/">
          Andrew Taeoalii
        </AccordionLink>
      </>
    ),
  },
  {
    label: "Shoot a DM on Twitter",
    body: (
      <>
        <p>
          This works better when your avatar isn't an anime character; but we'll
          work it out.
        </p>
        <AccordionLink href="https://twitter.com/tellaho">
          @tellaho
        </AccordionLink>
        <AccordionLink href="https://twitter.com/AndrewT808">
          @AndrewT808
        </AccordionLink>
        {/* <AccordionLink href="https://twitter.com/opendoorsformaui">
          @opendoorsformaui
        </AccordionLink> */}
      </>
    ),
  },
  {
    label: "Github Discussions",
    body: (
      <>
        <p>
          Drop a message in our <strong>Support and Requests</strong> category:
        </p>
        <AccordionLink href="https://github.com/hawaiians/opendoorsformaui/discussions/categories/support-and-requests">
          👀 Support and Requests
        </AccordionLink>
      </>
    ),
  },
  {
    label: "Connect to our Discord Server",
    body: (
      <>
        <AccordionLink href={DISCORD_URL}>
          Hawaiians In Tech Discord
        </AccordionLink>
      </>
    ),
  },
];
