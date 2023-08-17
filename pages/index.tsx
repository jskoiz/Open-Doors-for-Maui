import React from "react";
import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Plausible from "@/components/Plausible";
import { Title } from "@/components/Title.js";
import Head from "next/head";
import Image from "next/image";
import { Dashboard } from "components/dashboard/Grid";
import Cookie6 from "@/components/Cookies";

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
        className={`flex flex-col gap-4 px-4 pt-[1vh] lg:flex-row lg:gap-x-8 lg:px-8`}
      >
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="mb-[20px]">
            <Title text="Open&nbsp;Doors*for&nbsp;Maui" />
          </div>

          <section className="flex flex-col gap-4           text-2xl">
            <h3 className="text-lg font-bold text-stone-800">
              On August 8th, 2023 a rapidly spreading wildfire devastated West
              Maui.
            </h3>
            <p>
              The historic town of&nbsp;
              <strong className="font-semibold text-stone-800">Lāhainā</strong>
              &nbsp;was destroyed. In response to this tragedy, residents from
              across Hawaii and beyond immediately rallied to offer support
              through donations and shelter. With so many displaced from their
              homes, Governor Josh Green issued a plea urging those in Hawaii
              capable of doing so to&nbsp;
              <strong className="font-semibold text-stone-800">
                Open Their Doors for Maui.
              </strong>
            </p>
            <p>
              ODFM is a secure and easy-to-use platform designed to assist all
              groups involved in Maui's recovery efforts. By streamlining
              resource management, it simplifies coordination and organization,
              allowing these groups to concentrate on their primary mission:
              <strong className="font-semibold text-stone-800">
                aiding those affected by this tragedy.
              </strong>
            </p>
            <p>
              Open Doors for Maui was developed locally in Honolulu and is
              offered entirely free to any organization participating in Maui's
              recovery.
            </p>

            <p></p>
          </section>
        </div>
        <div className="justify-center overflow-hidden p-10 lg:w-1/2">
          <Image
            src="/images/lahaina.webp"
            alt="Lāhainā Image"
            width={1024}
            height={768}
            className="h-auto w-full md:w-3/4 lg:w-full"
          />
        </div>
      </div>
      <div className={`px-4 lg:px-8`}>
        <Dashboard />
      </div>

      <div className={`mx-3 w-1/3 px-4 lg:px-8`}>
        <Cookie6 />
      </div>
    </>
  );
}
