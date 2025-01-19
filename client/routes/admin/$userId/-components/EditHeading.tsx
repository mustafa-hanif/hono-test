// import { handleEditHeading } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { headings } from "@prisma/client";
import { Row } from "@tanstack/react-table";
import { useState } from "react";

const EditHeading = ({ row }: { row: Row<headings> }) => {
  const [dialog, setDialog] = useState(false);
  return (
    <Dialog open={dialog} onOpenChange={setDialog} key={row.id}>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-xl">
        <form
          id="formattribute"
          action={async (formdata) => {
            // await handleEditHeading(formdata, path, row.id);
            setDialog(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit heading</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Heading Name
            </Label>
            <Textarea
              name="name"
              id="name"
              placeholder="Heading name"
              className="col-span-3"
              defaultValue={row.original.name}
            />
            <Label htmlFor="heading_number" className="text-right">
              Heading Number
            </Label>
            <Input
              name="heading_number"
              id="heading_number"
              placeholder="Heading Number"
              className="col-span-3"
              // defaultValue={row.original.heading_number}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditHeading;
