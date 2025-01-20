// import {
//   setCompetitionEnded,
//   setNextHeadingActive,
//   updateShortsForAllUsers
// } from "@/app/lib/pocket";
import { Badge } from "@/components/ui/badge";
import { headings } from "@/prisma/client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TimerAdmin = ({
  timerData,
  headings,
  activeHeadingId
}: {
  timerData: any;
  headings: headings[] | undefined;
  activeHeadingId: string;
}) => {
  const pathname = window.location.pathname;
  const startTime = dayjs(timerData?.competition_start);
  if (!headings) {
    return null;
  }
  // Add 15 minutes to the start time
  const endTime = startTime.add(timerData.round_time, "minutes");
  const [timeLeft, setTimeLeft] = useState(endTime.diff(dayjs()));
  const [showRoundEnded, setShowRounedEnded] = useState(false);
  const [showLastRound, setShowLastRound] = useState(false);
  // Convert milliseconds into minutes and seconds
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const handlesetNextHeadingActive = () => {
    setShowRounedEnded(true);
    setTimeout(async () => {
      const currentIndex = headings.findIndex(
        (heading) => heading.id === activeHeadingId
      );
      if (currentIndex !== -1) {
        const currentRecord = headings[currentIndex];
        // Remove items before the current heading id
        const newRecords = headings.slice(currentIndex);
        if (newRecords.length == 2) {
          setShowLastRound(true);
        }
        const nextInactiveRecord = newRecords.find(
          (newRecords) => !newRecords.active
        );
        if (nextInactiveRecord?.id) {
          // await updateShortsForAllUsers(nextInactiveRecord);
          //setNextHeadingActive(nextInactiveRecord.id, activeHeadingId, path);
          // setTimeLeft(endTime.diff(dayjs()));
        } else {
          // setCompetitionEnded(path);
        }
      } else {
      }
    }, 3000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const remaining = endTime.diff(now);
      if (remaining <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
        handlesetNextHeadingActive();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    // Cleanup the timer
    return () => clearInterval(timer);
  }, [timerData.competition_start]);

  if (timerData?.competition_start) {
    return (
      <div className="flex flex-col space-y-2">
        {timeLeft > 0 && <h1>Timer</h1>}
        {timeLeft > 0 && <p>{`${minutes}m ${seconds}s left`}</p>}
        {timeLeft <= 300000 && timeLeft >= 120000 && (
          <Badge variant={"secondary"}>Less than 5 minutes left</Badge>
        )}
        {timeLeft <= 120000 && !showRoundEnded && timeLeft > 0 && (
          <Badge variant={"destructive"}>Round ending soon</Badge>
        )}
        {showRoundEnded && (
          <Badge variant={"secondary"}>
            Round ended. Next round starting soon.
          </Badge>
        )}
        {showLastRound && <Badge variant={"destructive"}>Final Round</Badge>}
      </div>
    );
  }
  return null;
};

export default TimerAdmin;
