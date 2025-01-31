import { ContentLayout } from '@/components/admin-panel/content-layout'
import { createFileRoute } from '@tanstack/react-router'
import { AddDayDialog } from "./-components/AddDayDialog";
import { DataTable } from "./-components/data-table";
import { columns } from "./-components/columns";
import { useQuery, useZero } from "@rocicorp/zero/react";
import { Schema } from "@/prisma/zero/schema";
import { useMyZero } from '@/lib/zeroDb';

export const Route = createFileRoute('/admin/$userId/days/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): { 
    /**
     * Email address of the user.
     */
    isStock: boolean 
   } => {
    return { isStock: !!search['isStock'] }
  },
})

function RouteComponent() {
  const z = useMyZero();
  const [days] = useQuery(z.query.days.orderBy('created', 'desc'));
  // const { days } = Route.useLoaderData();
  const { isStock } = Route.useSearch()

  return <ContentLayout title="Headings">
  <div className="flex items-center">
    <div className="flex-1">
      <div>
        Select a day to view your heading{""}
        {isStock && <div>and to view your stock</div>}
      </div>
      <div></div>
    </div>

    <AddDayDialog />
  </div>
  <DataTable columns={columns} data={days} />
</ContentLayout>
}
