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
} from "@tremor/react";
import Link from "next/link";

import {
  ArrowNarrowRightIcon,
  HomeIcon,
  MapIcon,
  ArchiveIcon,
  TagIcon,
} from "@heroicons/react/solid";

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
    numTransactions: 13,
    amount: "13",
  },
  {
    name: "Seeking Shelter",
    icon: MapIcon,
    color: "green",
    numTransactions: 4,
    amount: "5",
  },
  {
    name: "Offering Supplies",
    icon: ArchiveIcon,
    color: "green",
    numTransactions: 25,
    amount: "25",
  },
  {
    name: "Seeking Supplies",
    icon: TagIcon,
    color: "emerald",
    numTransactions: 31,
    amount: "31",
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
          <Link href="/offer-hosting">
            <Button
              size="sm"
              variant="light"
              icon={ArrowNarrowRightIcon}
              iconPosition="right"
              className="mt-4"
            >
              Offer shelter to someone in need
            </Button>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}
