import FilterPicker, { PickerFilter } from "@/components/filters/FilterPicker";
import MemberDirectory, { DirectoryMember } from "@/components/MemberDirectory";
import MetaTags from "@/components/Metatags";
import Nav from "@/components/Nav";
import Plausible from "@/components/Plausible";
import { Title } from "@/components/Title.js";
import {
  DocumentData,
  Filter,
  getFilters,
  getFiltersBasic,
  getFirebaseTable,
  getMembers,
  MemberPublic,
} from "@/lib/api";
import { FirebaseTablesEnum } from "@/lib/enums";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import TabCounts from "components/ui/tab-counts";
import { Tabs } from "registry/new-york/ui/tabs";

export async function getStaticProps() {
  const focusesData: DocumentData[] = await getFirebaseTable(
    FirebaseTablesEnum.FOCUSES
  );
  const industriesData: DocumentData[] = await getFirebaseTable(
    FirebaseTablesEnum.INDUSTRIES
  );
  const regionsData: DocumentData[] = await getFirebaseTable(
    FirebaseTablesEnum.REGIONS
  );
  const members: MemberPublic[] = await getMembers(
    focusesData,
    industriesData,
    regionsData
  );
  const focuses: Filter[] = await getFilters(
    FirebaseTablesEnum.FOCUSES,
    true,
    members.map((member) => member.id),
    focusesData
  );
  const industries: Filter[] = await getFilters(
    FirebaseTablesEnum.INDUSTRIES,
    true,
    members.map((member) => member.id),
    industriesData
  );
  const experiences: Filter[] = await getFiltersBasic(members, "experience");
  const regions: Filter[] = await getFiltersBasic(
    members,
    FirebaseTablesEnum.REGIONS,
    regionsData
  );
  return {
    props: {
      fetchedMembers: members,
      fetchedFocuses: focuses,
      fetchedIndustries: industries,
      fetchedExperiences: experiences,
      fetchedRegions: regions,
      pageTitle: "Open Doors for Maui",
    },
    revalidate: 60,
  };
}

export default function HomePage({
  fetchedMembers,
  fetchedFocuses,
  fetchedIndustries,
  fetchedExperiences,
  fetchedRegions,
  pageTitle,
}) {
  const initialState = {
    members: fetchedMembers.map((mem) => ({
      ...mem,
      // mutate & add active prop
      focus: mem.focus
        ? mem.focus.map((foc) => ({ ...foc, active: false }))
        : [],
      industry: mem.industry
        ? mem.industry.map((ind) => ({ ...ind, active: false }))
        : [],
      experienceFilter: [],
      regionFilter: [],
    })),
    focuses: fetchedFocuses.filter((focus) => focus.count > 0),
    industries: fetchedIndustries.filter((industry) => industry.count > 0),
    experiences: fetchedExperiences,
    regions: fetchedRegions.filter((region) => region.count > 0),
  };
  const [members, setMembers] = useState<DirectoryMember[]>(
    initialState.members
  );
  const [activeFilters, setActiveFilters] = useState<PickerFilter[]>([]);
  const [filtersList, setFiltersList] = useState<PickerFilter[]>(
    initialState.focuses.slice(0, 6)
  );
  const [focuses, setFocuses] = useState<PickerFilter[]>(initialState.focuses);
  const [industries, setIndustries] = useState<PickerFilter[]>(
    initialState.industries
  );
  const [experiences, setExperiences] = useState<PickerFilter[]>(
    initialState.experiences
  );
  const [regions, setRegions] = useState<PickerFilter[]>(initialState.regions);
  const [membersCount, setMembersCount] = useState<number>(
    initialState.members.length
  );
  const [viewAll, setViewAll] = useState<boolean>(true);

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
              Governor Josh Green issued a plea urging those in Hawaiʻi capable
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
      <div className={`px-4 pb-10 pt-10 lg:px-8`}>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabCounts />
        </Tabs>
      </div>

      {/* {focuses && (
        <FilterPicker
          filtersList={filtersList}
          activeFilters={activeFilters}
          onFilterClick={handleFilter}
          onFilterSelect={filterSelect}
          onViewAll={() => {
            setFiltersList(focuses);
            setViewAll(false);
          }}
          selectedMemberCount={membersCount}
          viewAll={viewAll}
        />
      )}
      <div className={`px-4 lg:px-8`}>
        {members && <MemberDirectory members={members} />}
      </div> */}
    </>
  );
}
