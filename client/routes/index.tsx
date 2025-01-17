import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})


function HomeComponent() {
  return (
    <div className="transition-all p-20 bg-slate-100">
      <h3 className='text-blue-800 animate-pulse text-9xl font-semibold'>Welcome Home!</h3>
      <ul className='text-6xl text-blue-600'>
        ok so good
      </ul>
    </div>
  )
}
