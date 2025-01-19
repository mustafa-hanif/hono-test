import { ContentLayout } from '@/components/admin-panel/content-layout'
import { createFileRoute } from '@tanstack/react-router'
import { AddDayDialog } from "./-components/AddDayDialog";
import { DataTable } from "./-components/data-table";
import { columns } from "./-components/columns";
import { client } from '@/lib/api';

export const Route = createFileRoute('/admin/$userId/days/')({
  component: RouteComponent,
  loader: async () => {
    const days = (await client.GET('/days/findMany', { 
      params: { 
        query: { q: '', meta: '' }
      }
    }
    )).data?.data;
    return { days }
  },
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
  const { days } = Route.useLoaderData();
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
  <DataTable columns={columns} data={days ?? []} />
</ContentLayout>
}
