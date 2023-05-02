import Logger from "./logger";
import { createServerClient } from "@/utils/supabase-server";
import Plans from "./components/Plans";

export default async function Home() {
  const isLogged = await createServerClient().auth.getUser();
  if (!isLogged.data.user) {
    return <Logger />;
  } else {
    return <Plans />;
  }
}
