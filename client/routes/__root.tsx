import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../index.css';
import 'unfonts.css';
import { hclient } from '@/lib/api';
import { ContextType } from '@/lib/types';


export const Route = createRootRouteWithContext<ContextType>()({
  component: RootComponent,
  beforeLoad: async () => {
    const data = await (await hclient.users.checklogin.$get(undefined,{
      init: {
        credentials: 'include'
      }
    })).json(); 
    return { user: data.user, session: data.session };
  }
})

function RootComponent() {
  return (
    <>      
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  )
}
