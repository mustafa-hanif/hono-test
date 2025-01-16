import { Button } from '@/components/ui/button'
import { useSubscription } from '@/lib/useSubscription'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
type UserTuple = { user: {
  name: string
}, session: string };
export const Route = createFileRoute('/stock-market/$userId/_layout/user')({
  component: User,
  loader: ({ context }) => {
    return context as unknown as UserTuple;
  }
})

function User() {
  // const { userId } = Route.useParams()
  // const routeApi = getRouteApi(`/stock-market/$userId/_layout`)
  // const data = routeApi.useLoaderData()
  const data = Route.useLoaderData();
  const [userList, setUserList] = useState<{id: number, name: string}[]>([]);
  // useSubscription<{id: number, name: string}[]>('userList', (data) => setUserList(_list => _list.concat(data)));
  return (
    <div className="p-20">
      <h3>About {data.user.name}</h3>
      <Button>Click me</Button>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
