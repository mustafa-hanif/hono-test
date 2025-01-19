import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ContextType } from '@/lib/types';
import { Button } from "./ui/button";
import { hclient } from "@/lib/api";
import { useNavigate } from "@tanstack/react-router";

interface AuthProfileProps {
  context: ContextType;
}

const AuthProfile = ({ context }: AuthProfileProps) => {
  const { user } = context || {}
  const navigate = useNavigate();
  return <nav className="flex items-center space-x-4">
  {user ? (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-muted-foreground">
        {user.name || user.email}
      </span>
      <Avatar>
        <AvatarImage src={user.avatar || undefined} alt={user.name || "User avatar"} />
        <Button variant={"secondary"} onClick={async () => {
          await hclient.users.logout.$post();
          navigate({ to: '/' });
        }}>
          <AvatarFallback>{user.username?.[0] || user.email?.[0] || "U"}</AvatarFallback>
        </Button>
      </Avatar>
    </div>
  ) : (
    null
  )}
</nav>
}

export default AuthProfile