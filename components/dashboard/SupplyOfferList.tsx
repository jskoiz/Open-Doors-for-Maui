import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";

const donationOffers = [
  { name: "Food", value: 8 },
  { name: "Water", value: 9 },
  { name: "Hygienic Items", value: 4 },
  { name: "Infant Items", value: 5 },
  { name: "Medicine", value: 2 },
];

const sum = donationOffers.reduce((total, item) => total + item.value, 0);
donationOffers.sort((a, b) => b.value - a.value);

const data = [
  {
    category: "Donation Offers",
    stat: sum.toString(),
    data: donationOffers,
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
            <Text>Total Donation Offers</Text>
          </Flex>
          <Flex className="mt-6">
            <Text>Type</Text>
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
