// import {
//   restartRound,
//   togglecompetitionActive,
//   togglecompetitionPause,
//   togglecompetitionStart,
//   updateRoundMinutes
// } from "@/app/lib/actions";
// import { ITimer } from "@/app/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { timer } from "@/prisma/client";

const CompetitionActionButtons = ({
  active,
  pause,
  ended,
  timerData
}: {
  active: boolean;
  pause: boolean;
  ended: boolean;
  timerData: timer;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <form
        action={(formAction) => {
          // togglecompetitionActive(formAction, active);
        }}
      >
        <Button variant={active ? "default" : "secondary"} type="submit">
          {active ? "Stop" : "Start"}
        </Button>
      </form>
      <form
        action={(formAction) => {
          // togglecompetitionPause(formAction, pause);
        }}
      >
        <Button variant={pause ? "default" : "secondary"} type="submit">
          {pause ? "Unpause" : "Pause"}
        </Button>
      </form>
      <form
        action={(formAction) => {
          // togglecompetitionStart(formAction, ended);
        }}
      >
        <Button variant={ended ? "secondary" : "default"} type="submit">
          {ended ? "Restart" : "End"}
        </Button>
      </form>
      <form
        action={(formAction) => {
          // restartRound(formAction);
        }}
      >
        <Button variant="default" type="submit">
          Restart Round
        </Button>
      </form>
      <form
        className="flex items-center space-x-2"
        action={(formAction) => {
          // updateRoundMinutes(formAction);
        }}
      >
        <Label className="w-full">Timer (in minutes)</Label>
        <Input
          type="number"
          name="round_time"
          defaultValue={timerData.round_time}
        />
        <Button variant={"default"} size={"sm"}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default CompetitionActionButtons;
