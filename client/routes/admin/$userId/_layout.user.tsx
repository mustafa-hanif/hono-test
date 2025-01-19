import { useTanContext } from '@/lib/useTanContext'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/$userId/_layout/user')({
  component: User,
})

function User() {
  const context = useTanContext();
  return (
    <div className="p-20">
      Welcome {context?.user?.username}
    </div>
  )
}
