import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../index.css';
import 'unfonts.css';
import { hclient } from '@/lib/api';
import { ContextType } from '@/lib/types';


export const Route = createRootRouteWithContext<ContextType>()({
  component: RootComponent,
  beforeLoad: async () => {
    // const data = await (await hclient.users.checklogin.$get(undefined,{
    //   init: {
    //     credentials: 'include'
    //   }
    // })).json(); 
    // console.log(data.user)
    return { user: {
      "avatar": "",
      "created": "2025-01-26T22:37:06.250Z",
      "email": "",
      "emailVisibility": false,
      "id": "cm6e79e8a00007vs6nvuzjwlf",
      "name": "",
      "password": "$argon2d$v=19$m=65536,t=2,p=1$CvLUjVV4UnOftlDa/8jVx5H5KD3TSXqNHDxMNll+nzk$rnJP2C/0VxlwHz2rYYZF+ANa84W0oPCRrwNYEKqQ0hg",
      "tokenKey": "joq76s2upda6nndckwd5cwxdy3ac4zoa",
      "updated": "2025-01-26T22:37:06.250Z",
      "username": "SERA",
      "verified": false,
      "type": "",
      "wallet": ""
  }, session: {} };
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
