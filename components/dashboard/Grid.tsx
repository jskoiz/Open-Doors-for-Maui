import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { OverviewStats } from "./OverallStats";
import { Example } from "./SeekingShelterTable";
import { RankedNeeds } from "./SupplyNeedList";
import { RankedOffering } from "./SupplyOfferList";

export function Dashboard() {
  return (
    <main>
      <Title>Dashboard</Title>
      <Text>Overview of current data</Text>

      <TabGroup className="mt-6">
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
              <OverviewStats />
              <RankedNeeds />
              <RankedOffering />
            </Grid>
            <div className="mt-6"></div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <Example />
    </main>
  );
}
