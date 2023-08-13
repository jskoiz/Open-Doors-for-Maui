import { Filter } from "@/lib/api";
import { useState } from "react";
import BigPill from "../BigPill";
import Selectable, { SelectableSize } from "../form/Selectable";
import FilterPickerCategory from "./FilterPickerCategory";

export interface PickerFilter extends Filter {
  active?: boolean;
}

interface FilterPickerProps {
  filtersList: PickerFilter[];
  activeFilters: PickerFilter[];
  onFilterClick: (id?: string, filterType?: string) => any;
  onViewAll: () => any;
  onFilterSelect: (filterSelect?: string, enable?: boolean) => any;
  selectedMemberCount?: number;
  viewAll?: boolean;
}

export default function FilterPicker({
  filtersList = [],
  activeFilters,
  onFilterClick,
  onFilterSelect,
  selectedMemberCount,
  onViewAll,
  viewAll,
}: FilterPickerProps) {
  const [offerActive, setOfferActive] = useState<boolean>(true);
  const [focusActive, setFocusActive] = useState<boolean>();
  const [industryActive, setIndustryActive] = useState<boolean>();
  const [seekingActive, setSeekingActive] = useState<boolean>();
  const [experienceActive, setExperienceActive] = useState<boolean>();
  const filterIsSelected = activeFilters.length !== 0;

  function activateFilter(setFilter: Function, filtertype: string) {
    const filterSetList = [
      setOfferActive,
      setFocusActive,
      setIndustryActive,
      setSeekingActive,
      setExperienceActive,
    ];
    for (const filterSet of filterSetList) {
      if (filterSet !== setFilter) filterSet(false);
    }
    setFilter(true);
    onFilterSelect(filtertype);
  }

  return (
    <>
      <div className="relative mt-16 w-full">
        <ul className={`mb-4 flex min-h-[44px] w-full flex-wrap gap-2`}>
          {activeFilters.map((focus, i) => (
            <li key={`focus-filter-${i}`}>
              <BigPill onClick={() => onFilterClick(focus.id)}>
                {focus.name}
              </BigPill>
            </li>
          ))}
        </ul>
        <div className="mb-4 flex items-center">
          <div className="inline-flex gap-2 rounded-full bg-maui-400 p-1 text-maui-100">
            <FilterPickerCategory
              category="Offering Shelter"
              active={offerActive}
              onClick={() => activateFilter(setOfferActive, "Offering Shelter")}
            />
            <FilterPickerCategory
              category="Location"
              active={focusActive}
              onClick={() => activateFilter(setFocusActive, "focus")}
            />
            <FilterPickerCategory
              category="Needs"
              active={industryActive}
              onClick={() => activateFilter(setIndustryActive, "industry")}
            />
            <FilterPickerCategory
              category="Family Size"
              active={experienceActive}
              onClick={() => activateFilter(setExperienceActive, "experience")}
            />
            <FilterPickerCategory
              category="Seeking Shelter"
              active={seekingActive}
              onClick={() => activateFilter(setSeekingActive, "seeking")}
            />
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 transition-all">
          {filtersList
            .sort((a, b) => b.count - a.count)
            .map((filter, i) => (
              <li key={`focus-filter-${filter.id}`}>
                <Selectable
                  headline={filter.name}
                  onClick={() => onFilterClick(filter.id)}
                  // TODO: fix inaccurate count
                  //       - thinking it has something to do with non-approved
                  // count={filter.count}
                  selected={filter.active}
                  disabled={filter.count === 0}
                  centered
                  size={SelectableSize.Large}
                />
              </li>
            ))}
          {viewAll && (
            <li>
              <button
                className={`
                  h-full
                  rounded-lg
                  border-4
                  border-transparent
                  bg-maui-400
                  px-2
                  py-1
                  hover:border-maui-500/50
                  hover:transition-all
                `}
                onClick={onViewAll}
              >
                ...
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
