import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";

const supplyNeeds = [
  { name: "Food", value: 66 },
  { name: "Water", value: 55 },
  { name: "Hygienic Items", value: 34 },
  { name: "Infant Items", value: 22 },
  { name: "Medicine", value: 15 },
];
const data = [
  {
    category: "Supply Requests",
    stat: "213",
    data: supplyNeeds,
  },
];

export function RankedNeeds() {
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
            <Text>Total Requests for Supplies</Text>
          </Flex>
          <Flex className="mt-6">
            <Text>Supply Type</Text>
            <Text className="text-right">Total</Text>
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
