import { Link, Outlet, createRootRouteWithContext, useRouterState } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../index.css';
import 'unfonts.css';
import { hclient } from '@/lib/api';
import AuthProfile from '@/components/AuthProfile';
import { session, users } from '@prisma/client';
import { ContextType } from '@/lib/types';


export const Route = createRootRouteWithContext<{ user: users, session: session }>()({
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
  const matches = useRouterState({ select: (s) => s.matches })
  const context: ContextType = matches?.[0]?.context
  return (
    <>
      <div className={`p-2 flex gap-2 text-lg px-4 items-center`}>
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>
        <Link
          to="/register"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Register
        </Link>
        <div className='ml-auto'>
          <AuthProfile context={context} />
        </div>
      </div>
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  )
}
