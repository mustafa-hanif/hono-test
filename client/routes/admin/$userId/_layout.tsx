import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/$userId/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AdminPanelLayout>
    <Outlet />
  </AdminPanelLayout>
}
