import { Children } from "react";

export default function FormLayouts({action,children}) {
  return (
    <form
      action={action}
      className="form block mt-10 md:w-6/12 w-11/12 mx-auto"
    >
        {children}
    </form>
  );
}
