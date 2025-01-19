// import { setDayAsActive, setHeadingAsActive } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const MarkAsActiveButton = ({
  status,
  heading_id,
  day_id
}: {
  status: boolean;
  heading_id: string;
  day_id: string;
}) => {

  const SubmitButton = () => {
    const { pending } = { pending: false };

    return (
      <>
        {pending ? (
          <Loader2 className="animate-spin" />
        ) : (
          !status && <Button type="submit">Set as Active</Button>
        )}
      </>
    );
  };

  return (
    <form
      action={() => {
        // setHeadingAsActive(heading_id, day_id, pathname);
      }}
    >
      <SubmitButton />
    </form>
  );
};
