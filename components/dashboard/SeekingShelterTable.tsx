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
  relocate: string;
};

const salesPeople: Person[] = [
  {
    name: "Enzo M.",
    space: "2-3 ʻOhana",
    relocate: "Yes",
  },
  {
    name: "Tanna O..",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Jin Y.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Glenn P.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Kuuipo K.",
    space: "2-3 ʻOhana",
    relocate: "Yes",
  },
  {
    name: "Elle K.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Royce E",
    space: "1 (Individual)",
    relocate: "Yes",
  },
];

export function Rrs() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const isPersonSelected = (Person: Person) =>
    selectedNames.includes(Person.name) || selectedNames.length === 0;

  return (
    <Card>
      <Title>Recent Request for Housing</Title>
      <Text>Full list available upon request</Text>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-center">
              Relocation ok?
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Space Needed
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-center">{item.relocate}</TableCell>
                <TableCell className="text-right">
                  <Badge size="xs">{item.space}</Badge>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
