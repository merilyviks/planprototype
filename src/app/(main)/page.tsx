import { createServerClient } from "@/utils/supabase-server";
import Plans from "./components/Plans";
import Login from "@/components/auth/Login";

export default async function Home() {
  const isLogged = await createServerClient().auth.getUser();
  if (!isLogged.data.user) {
    return <Login />;
  } else {
    return (
      <>
        {/* @ts-expect-error Async Server Component */}
        <Plans />;
      </>
    );
  }
}
