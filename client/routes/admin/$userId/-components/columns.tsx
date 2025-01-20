import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  BarChartHorizontalBig,
  Copy,
  ExternalLink,
  MoreHorizontal
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
// import utc from 'dayjs/plugin/utc'

import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";
import { MarkAsActiveButton } from "./MarkAsActiveButton";
import EditHeading from "./EditHeading";
import { headings } from "@/prisma/client";

export const columns: ColumnDef<headings>[] = [
  {
    accessorKey: "name",
    size: 150,
    maxSize: 300,
    minSize: 150,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 mb-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Heading Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-sm font-medium">{row.original.name}</div>;
    }
  },
  {
    accessorKey: "active",
    size: 100,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 mb-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Active
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      if (row.original.active) {
        return <Badge variant={"default"}>Active</Badge>;
      }
      return <Badge variant={"destructive"}>Inactive</Badge>;
    }
  },
  {
    accessorKey: "heading_number",
    size: 50,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 mb-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Heading Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>{row?.original?.heading_number}</div>;
    }
  },
  {
    id: "actions",
    size: 100,
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <MarkAsActiveButton
            status={row.original.active}
            heading_id={row.id}
            day_id={row.original.day}
          />
          <EditHeading row={row} />
        </div>
      );
    }
  }
];
