import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";

import { useState } from "react";

type Person = {
  name: string;
  space: string;
  city: string;
  island: string;
};

const salesPeople: Person[] = [
  {
    name: "George L.",
    space: "2-3 ʻOhana",
    city: "Kahului",
    island: "Maui",
  },
  {
    name: "Lena W.",
    space: "3-4 'Ohana",
    city: "Kula",
    island: "Maui",
  },
  {
    name: "Phil L.",
    space: "1 Individual",
    city: "Honolulu",
    island: "'Oahu",
  },
  {
    name: "John C.",
    space: "2-3 ʻOhana",
    city: "Hilo",
    island: "Hawai'i Island",
  },
  {
    name: "Sarah Y.",
    space: "1 Individual",
    city: "Kihei",
    island: "Maui",
  },
  {
    name: "Linda T.",
    space: "3-4 ʻOhana",
    city: "Kapolei",
    island: "Honolulu",
  },
  {
    name: "Kawika S.",
    space: "2-3 ʻOhana",
    city: "Kahului",
    island: "Maui",
  },
];

export function Recent() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isPersonSelected = (Person: Person) =>
    selectedNames.includes(Person.island) || selectedNames.length === 0;

  return (
    <Card>
      <Title>Recent Offers for Housing</Title>
      <Text>Full list available upon request</Text>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-center">
              Space Available
            </TableHeaderCell>
            <TableHeaderCell className=" hidden text-center sm:table-cell">
              City
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Island</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-center">{item.space}</TableCell>
                <TableCell className=" hidden text-center sm:table-cell">
                  {item.city}
                </TableCell>
                <TableCell className="text-right">
                  <Badge size="xs">{item.island}</Badge>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
