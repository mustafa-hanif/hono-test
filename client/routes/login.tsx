import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { client } from '@/lib/api';

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})

function LoginComponent() {
  const navigate = useNavigate();
  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('login')
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    (await client.users.login.$post({ form: { username, password } }, {
      init: {
        credentials: 'include'
      }
    })).json().then((data) => {
      console.log(data)
      if ((data as { username: string}).username) {
        navigate({
          to: `/stock-market/$userId/user`,
          params: {
            userId: (data as { username: string}).username
          }
        })
      }
      
    })
  }
  return (
    <div className="p-20 max-w-md mx-auto">
      <h3>Login User</h3>
      <form onSubmit={login} className='flex flex-col space-y-4'>
        <Input name="username" type="text" placeholder="Username" />
        <Input name="password" type="password" placeholder="Password" />
        <Button>Login</Button>
      </form>
    </div>
  )
}
