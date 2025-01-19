import { Navbar } from "@/components/admin-panel/navbar";
import { useTanContext } from "@/lib/useTanContext";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({
  title,
  children
}: ContentLayoutProps) {
  const user = useTanContext()?.user;
  return (
    <div>
      <Navbar title={title} user={user} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
