import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";

const website = [
  { name: "/home", value: 1230 },
  { name: "/contact", value: 751 },
  { name: "/gallery", value: 471 },
  { name: "/august-discount-offer", value: 280 },
  { name: "/case-studies", value: 78 },
];

const shop = [
  { name: "/home", value: 453 },
  { name: "/imprint", value: 351 },
  { name: "/shop", value: 271 },
  { name: "/pricing", value: 191 },
];

const app = [
  { name: "/shop", value: 789 },
  { name: "/product-features", value: 676 },
  { name: "/about", value: 564 },
  { name: "/login", value: 234 },
  { name: "/downloads", value: 191 },
];

const data = [
  {
    category: "Online Shop",
    stat: "12,543",
    data: shop,
  },
];

export function RankedOffering() {
  return (
    <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
      {data.map((item) => (
        <Card key={item.category}>
          <Title>{item.category}</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-4"
          >
            <Metric>{item.stat}</Metric>
            <Text>Total views</Text>
          </Flex>
          <Flex className="mt-6">
            <Text>Pages</Text>
            <Text className="text-right">Views</Text>
          </Flex>
          <BarList
            data={item.data}
            valueFormatter={(number: number) =>
              Intl.NumberFormat("us").format(number).toString()
            }
            className="mt-2"
          />
        </Card>
      ))}
    </Grid>
  );
}
