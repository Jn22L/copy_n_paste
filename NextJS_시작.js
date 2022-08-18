// _app.js
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

// NavBar.js
import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </nav>
      <style jsx>{`
        .active {
          color: tomato;
        }
      `}</style>
    </>
  );
}

// index.js
export default function Home() {
  return <>index</>;
}

// about.js
export default function About() {
  return <>about</>;
}
