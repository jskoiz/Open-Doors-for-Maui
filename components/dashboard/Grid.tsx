import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  Col,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import { OverviewStats } from "./OverallStats";
import { Recent } from "./OfferingShelterTable";
import { Rrs } from "./SeekingShelterTable";
import { RankedNeeds } from "./SupplyNeedList";
import { RankedOffering } from "./SupplyOfferList";

export function Dashboard() {
  return (
    <main>
      <TabGroup className="mt-2 pb-8">
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={3} className="mt-2 gap-2">
              <OverviewStats />
              <RankedNeeds />
              <RankedOffering />
            </Grid>
            <div className="mt-2"></div>
          </TabPanel>
        </TabPanels>
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanLg={2}>
            <Recent />{" "}
          </Col>
          <Rrs />
        </Grid>
      </TabGroup>
    </main>
  );
}
