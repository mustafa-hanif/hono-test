import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { client } from '@/lib/api'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  const register = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('login')
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    (await client.users.register.$post({ form: { username, password } })).json().then((data) => {
      console.log(data)
    })
  }
  return (
    <div className="p-20 max-w-md mx-auto">
      <h3>Create User</h3>
      <form onSubmit={register} className='flex flex-col space-y-4'>
        <Input name="username" type="text" placeholder="Username" />
        <Input name="password" type="password" placeholder="Password" />
        <Button>Register</Button>
      </form>
    </div>
  )
}
