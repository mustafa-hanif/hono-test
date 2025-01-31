
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { client } from "@/lib/api";
import { Form } from "@/lib/form";
import { useMyZero } from "@/lib/zeroDb";
import { nanoid } from 'nanoid';
import { useState } from "react";

export function AddDayDialog() {
  const [dialog, setDialog] = useState(false);
  const z = useMyZero();
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button type="button">Add Day</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form
          id="formattribute"
           handleSubmit={async (values) => {
            z.mutate.days.insert({
              id: nanoid(),
              name: values["name"]!,
              description: values["description"]!,
              created: new Date().getTime(),
              updated: new Date().getTime(),
              active: false
            });
            // await client.POST("/days/create", {
            //   body: {
            //     data: {
            //       name: values["name"]!,
            //       description: values["description"]!
            //     }
            //   }
            // });
            setDialog(false);
          }}
        >
          <>
          <DialogHeader>
            <DialogTitle>Add Day</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Day Name
              </Label>
              <Input
                name="name"
                id="name"
                placeholder="Day name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                id="description"
                placeholder="Description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          </>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
