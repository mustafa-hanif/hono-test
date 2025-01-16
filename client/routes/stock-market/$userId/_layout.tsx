
import { client } from '@/lib/api'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'


export const Route = createFileRoute('/stock-market/$userId/_layout')({
  component: RouteComponent,
  beforeLoad: async () => {
    const data = await (await client.users.checklogin.$get(undefined,{
      init: {
        credentials: 'include'
      }
    })).json(); 
    if (!data.user) {
      return redirect({
        to: '/login'
      });
    }
    return { user: data.user, session: data.session };
  }
})

function RouteComponent() {
  return <Outlet />
}
