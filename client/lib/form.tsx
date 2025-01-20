import { ReactElement } from "react";

export const Form = ({ children, handleSubmit, ...props }: { children: ReactElement, handleSubmit: (values: Record<string, string>) => Promise<void>, [key: string]: any }) => {
  return (
    <form {...props} onSubmit={async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formdata = new FormData(form);
      
      const jsonObject: Record<string, string> = Array.from(formdata.entries()).reduce((acc, [key, value]) => {
        acc[key as string] = value.toString();
        return acc;
      }, {} as { [key: string]: string });
      await handleSubmit(jsonObject);
    }}>;
      {children}
    </form>
  );
}