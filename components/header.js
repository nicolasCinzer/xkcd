import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function header() {
  return (
    <div className="flex justify-around p-2 text-sm">
      <Link href="/">
        <a className="font-bold transition-all duration-500 group">
          XKCD
          <span className="font-light transition-all duration-500 group-hover:tracking-[0.3em]">
            VIEW
          </span>
        </a>
      </Link>
      <div className="grid grid-flow-col gap-8 pr-4">
        <Link href="/">
          <a className="tracking-[0.4em] transition-all duration-300 hover:tracking-[0.1em]">
            HOME
          </a>
        </Link>
        <Link href="/about">
          <a className="tracking-[0.4em] transition-all duration-300 hover:tracking-[0.1em]">
            ABOUT
          </a>
        </Link>
      </div>
    </div>
  );
}
