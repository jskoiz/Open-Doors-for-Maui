import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";

const supplyNeeds = [
  { name: "Food", value: 8 },
  { name: "Water", value: 13 },
  { name: "Hygienic Items", value: 4 },
  { name: "Infant Items", value: 6 },
  { name: "Medicine", value: 3 },
];

const sum = supplyNeeds.reduce((total, item) => total + item.value, 0);
supplyNeeds.sort((a, b) => b.value - a.value);

const data = [
  {
    category: "Supply Requests",
    stat: sum.toString(),
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
