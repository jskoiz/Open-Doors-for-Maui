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
    name: "Nani L.",
    space: "2-3 ʻOhana",
    relocate: "Yes",
  },
  {
    name: "Richard D.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Pat K.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Dawn L.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Tricia P.",
    space: "2-3 ʻOhana",
    relocate: "Yes",
  },
  {
    name: "Leimomi K.",
    space: "2-3 ʻOhana",
    relocate: "No",
  },
  {
    name: "Shaun A.",
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
