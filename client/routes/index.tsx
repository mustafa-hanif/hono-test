import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})


function HomeComponent() {
  return (
    <div className="p-20">
      <h3>Welcome Home!</h3>
      <ul>
        hi whats up
      </ul>
    </div>
  )
}
