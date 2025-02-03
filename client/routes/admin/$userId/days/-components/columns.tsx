

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { ArrowUpDown } from "lucide-react";

// import utc from 'dayjs/plugin/utc'
import { MarkAsActiveButton } from "./MarkAsActiveButton";
import { useQuery } from "@rocicorp/zero/react";
import { Schema } from "@/prisma/zero/schema";
import { Badge } from "@/components/ui/badge";
import { days } from "@/prisma/zero/schema";
import { useMyZero } from "@/lib/zeroDb";

export const columns: ColumnDef<days>[] = [
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
          Day Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-sm font-medium">{row.original.name}</div>;
    }
  },
  {
    accessorKey: "description",
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
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-sm font-medium">{row.original.description}</div>
      );
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
    accessorKey: "active",
    header: ({ column }) => {
      return <div>Headings</div>
    },
    cell: ({ row }) => {
      const z = useMyZero();
      const [headings] = useQuery(z.query.headings.where('day', '=', row.id));
      return <div>{headings.length}</div>
    }
  },
  {
    accessorKey: "created",
    size: 100,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 mb-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return dayjs(row.getValue("created")).format("MMMM D, YYYY h:mm A");
    }
  },
  {
    id: "actions",
    size: 100,
    cell: ({ row }) => {
      const z = useMyZero();
      return (
        <Button onClick={() => z.mutate.days.update({
          id: row.id,
          active: !row.original.active
        })}>
          {row.original.active ? <>Mark as Inactive</>: <>Mark as Active</>}
        </Button>
      );
    }
  }
];
