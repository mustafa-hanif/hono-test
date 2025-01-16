import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button';
import { client } from '@/lib/api';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
  loader: async () => await (await client.stuff.$get()).json(),
})

function AboutComponent() {
  const posts = Route.useLoaderData()
  
  return (
    <div className="p-20">
      <h3>About</h3>
      <Button>Click me</Button>
      <p>{posts.message}</p>
    </div>
  )
}
