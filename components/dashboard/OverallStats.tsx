import {
  Card,
  List,
  ListItem,
  Icon,
  Text,
  Bold,
  Flex,
  Title,
  Button,
  Color,
  Grid,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  DeltaType,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";

import {
  BriefcaseIcon,
  DesktopComputerIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  ArrowNarrowRightIcon,
  LightningBoltIcon,
  HomeIcon,
  MapIcon,
  ArchiveIcon,
  TruckIcon,
  TagIcon,
} from "@heroicons/react/solid";

import { useState } from "react";

type SalesPerson = {
  name: string;
  leads: number;
  sales: string;
  quota: string;
  variance: string;
  region: string;
  status: string;
  deltaType: DeltaType;
};

const salesPeople: SalesPerson[] = [
  {
    name: "Peter Doe",
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
    deltaType: "moderateIncrease",
  },
  {
    name: "Lena Whitehouse",
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "average",
    deltaType: "unchanged",
  },
  {
    name: "Phil Less",
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "underperforming",
    deltaType: "moderateDecrease",
  },
  {
    name: "John Camper",
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Max Balmoore",
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "overperforming",
    deltaType: "increase",
  },
  {
    name: "Peter Moore",
    leads: 82,
    sales: "1,460,000",
    quota: "1,500,000",
    variance: "low",
    region: "Region A",
    status: "average",
    deltaType: "unchanged",
  },
  {
    name: "Joe Sachs",
    leads: 49,
    sales: "1,230,000",
    quota: "1,800,000",
    variance: "medium",
    region: "Region B",
    status: "underperforming",
    deltaType: "moderateDecrease",
  },
];

export function Example() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    selectedNames.includes(salesPerson.name) || selectedNames.length === 0;

  return (
    <Card>
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="Select Salespeople..."
        className="max-w-xs"
      >
        {salesPeople.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Leads</TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">Variance</TableHeaderCell>
            <TableHeaderCell className="text-right">Region</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.leads}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell className="text-right">{item.quota}</TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={item.deltaType} size="xs">
                    {item.status}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}

type TransactionCategory = {
  name: string;
  icon: any;
  color: Color;
  numTransactions: number;
  amount: string;
};

const march: TransactionCategory[] = [
  {
    name: "Offer Shelter",
    icon: HomeIcon,
    color: "green",
    numTransactions: 34,
    amount: "62",
  },
  {
    name: "Seeking Shelter",
    icon: MapIcon,
    color: "green",
    numTransactions: 4,
    amount: "88",
  },
  {
    name: "Offering Supplies",
    icon: ArchiveIcon,
    color: "green",
    numTransactions: 100,
    amount: "123",
  },
  {
    name: "Seeking Supplies",
    icon: TagIcon,
    color: "emerald",
    numTransactions: 45,
    amount: "45",
  },
];

const lastUpdated = [
  {
    name: "Last Updated: 8/13/20223 - 7:00PM",
    data: march,
  },
];

export function OverviewStats() {
  return (
    <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
      {lastUpdated.map((item) => (
        <Card key={item.name}>
          <Title>Offering & Needs Overview</Title>
          <Text>{item.name}</Text>
          <List className="mt-4">
            {item.data.map((transaction) => (
              <ListItem key={transaction.name}>
                <Flex justifyContent="start" className="space-x-4 truncate">
                  <Icon
                    variant="light"
                    icon={transaction.icon}
                    size="md"
                    color={transaction.color}
                  />
                  <div className="truncate">
                    <Text className="truncate">
                      <Bold>{transaction.name}</Bold>
                    </Text>
                    <Text className="truncate">
                      {`${transaction.numTransactions} New Today`}
                    </Text>
                  </div>
                </Flex>
                <Text>{transaction.amount}</Text>
              </ListItem>
            ))}
          </List>
          <Button
            size="sm"
            variant="light"
            icon={ArrowNarrowRightIcon}
            iconPosition="right"
            className="mt-4"
          >
            View details
          </Button>
        </Card>
      ))}
    </Grid>
  );
}
