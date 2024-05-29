import { auth, signOut } from "@/auth";
import Link from "next/link";

function SignOutAuth() {
  return (
    <form action={async () => {
      "use server"
      await signOut()
    }}>
      <button type="submit">Sign out</button>
    </form>
  )
}

const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header>
      <nav>
        <h1>Ai Form Bulilder</h1>
        <div>
          {session?.user ? (
            <div><SignOutAuth /></div>
          ) : (
            <Link href="/api/auth/signin">
              <button>Sign In</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
