import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Plausible from "@/components/Plausible";
import { Title } from "@/components/Title.js";
import Head from "next/head";
import React from "react";
import { Dashboard } from "components/dashboard/Grid";

export default function HomePage({ pageTitle }) {
  return (
    <>
      <Head>
        <Plausible />
        <MetaTags title={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <Nav primaryNav={{ show: true }} />
      <div
        className={`flex flex-col gap-4 px-4 pt-[6vh] lg:flex-row lg:gap-x-8 lg:px-8`}
      >
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="mb-[20px]">
            <Title text="Open&nbsp;Doors*for&nbsp;Maui" />
          </div>

          <section className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-stone-800">
              On August 8th, 2023 a rapidly spreading wildfire devastated West
              Maui
            </h3>
            <p>
              The historic town of&nbsp;
              <strong className="font-semibold text-stone-800">Lāhainā</strong>
              &nbsp;was destroyed. In response to this tragedy, residents from
              across Hawaii and beyond immediately rallied to offer support and
              assistance. With numerous residents displaced from their homes,
              Governor Josh Green issued a plea urging those in Hawaii capable
              of doing so to&nbsp;
              <strong className="font-semibold text-stone-800">
                Open Their Doors for Maui.
              </strong>
            </p>
            <p className="mb-5">
              This site has been built by the community to foster&nbsp;
              <strong className="font-semibold text-stone-800">
                connections between willing hosts and those seeking shelter.
              </strong>
            </p>
          </section>
        </div>

        <div className="justify-center overflow-hidden lg:w-1/3">
          <img
            src="/images/lahaina.png"
            alt="Lāhainā Image"
            className="h-auto w-full md:w-3/4 lg:w-full"
          />
        </div>
      </div>
      <div className={`px-4 lg:px-8`}>
        <Dashboard />{" "}
      </div>
    </>
  );
}
