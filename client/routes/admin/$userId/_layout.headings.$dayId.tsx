import { AddHeadingDialog } from '@/components/AddHeadingDialog'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import CompetitionActionButtons from '@/components/CompetitionActionButtons'
import TimerAdmin from '@/components/TimerAdmin'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { client } from '@/lib/api'
import { headings, timer } from '@/prisma/client'
import { createFileRoute, Link } from '@tanstack/react-router'
import { columns } from './-components/columns'
import { DataTable } from './-components/data-table'

export const Route = createFileRoute('/admin/$userId/_layout/headings/$dayId')({
  component: RouteComponent,
  loader: async () => {
    const day = (
      await client.GET('/days/findFirst', {
        params: { query: { q: '', meta: '' } },
      })
    ).data?.data
    const headings = (
      await client.GET('/headings/findMany', {
        params: { query: { q: '', meta: '' } },
      })
    ).data?.data
    const heading = (
      await client.GET('/headings/findUnique', {
        params: { query: { q: '', meta: '' } },
      })
    ).data?.data
    const competitionStatus = (
      await client.GET('/competition/findFirst', {
        params: { query: { q: '', meta: '' } },
      })
    ).data?.data
    const timerData = (
      await client.GET('/timer/findMany', {
        params: { query: { q: '', meta: '' } },
      })
    ).data?.data
    return { day, headings, heading, competitionStatus, timerData }
  },
})

function RouteComponent() {
  const { day, headings, heading, competitionStatus, timerData } =
    Route.useLoaderData()
  const { userId } = Route.useParams()
  return (
    <ContentLayout title="Headings">
      <Breadcrumb className="mb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/admin/$userId/days" params={{ userId }}>
                Days
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Headings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center">
        <div className="flex-1">
          <div>
            Showing headings for <b>{day?.name}</b>
          </div>
          <div>Select heading to view their stock prices</div>
        </div>

        <div className="flex flex-col space-y-2">
          <AddHeadingDialog />
          {heading?.id &&
            competitionStatus?.active &&
            !competitionStatus.pause &&
            !competitionStatus.ended && (
              <TimerAdmin
                timerData={timerData}
                headings={headings as unknown as headings[]}
                activeHeadingId={heading.id}
              />
            )}
        </div>
      </div>
      <div className="text-lg mt-4 mb-2">Competition Actions</div>
      {competitionStatus && timerData && (
        <CompetitionActionButtons
          active={competitionStatus.active}
          pause={competitionStatus.pause}
          ended={competitionStatus.ended}
          timerData={timerData as unknown as timer}
        />
      )}
      {competitionStatus ? (
        <div className="mt-2">
          {competitionStatus.ended && (
            <p>
              Competition has ended. Click on{' '}
              <span className="font-bold">Restart</span> button to start the
              competition again
            </p>
          )}
          {competitionStatus.active &&
            !competitionStatus.pause &&
            !competitionStatus.ended && <p>Competition is running</p>}
          {competitionStatus.pause && (
            <p>
              Competition is paused. Click the{' '}
              <span className="font-bold">Resume</span> button to resume the
              competition.
            </p>
          )}
          {!competitionStatus.active && (
            <p>
              Competition is stopped. Click on{' '}
              <span className="font-bold">Start</span> button to start the
              competition again.
            </p>
          )}
        </div>
      ) : null}

      <DataTable columns={columns} data={headings as unknown as headings[]} />
    </ContentLayout>
  )
}
