import { cookies } from "next/headers";
import Logout from "../../components/auth/Logout";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const isSeen = () => {
    if (cookies().size) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <main className="main-container">{children}</main>
      <footer className="main-page-footer">
        <div className="footer-container">
          <p>Made by Merily Viks</p>
          <Logout text="logi välja" isSeen={isSeen()} />
        </div>
      </footer>
    </>
  );
}
