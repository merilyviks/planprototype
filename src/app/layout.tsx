import "../styles/main.scss";

import SupabaseProvider from "./supabase-provider";

export const metadata = {
  title: "Enesekontrolliplaani loomine",
  description: "Veebiaplikatsioon, mis loob sulle enesekontrolliplaani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
