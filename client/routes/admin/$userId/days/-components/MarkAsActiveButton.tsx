import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";

export const MarkAsActiveButton = ({
  status,
  day_id
}: {
  status: boolean;
  day_id: string;
}) => {
  const pathname = usePathname();

  const SubmitButton = () => {
    const { pending } = { pending: false }

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
        // setDayAsActive(day_id, pathname);
      }}
    >
      <SubmitButton />
    </form>
  );
};
