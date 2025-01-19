import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { hclient } from '@/lib/api';
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigation = useNavigate();
  const register = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('login')
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    (await hclient.users.register.$post({ 
        form: { username, password } 
      }, { init: { credentials: 'include' }})).json().then((data) => {
      if (data.message === 'OK') {
        navigation({ to: '/admin/$userId/user', params: { userId: username } });
      }
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
