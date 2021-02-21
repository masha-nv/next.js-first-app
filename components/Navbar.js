import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.wrapper}>
      <Link href="/">
        <Image src="/cactus.jpg" width={100} height={100} />
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/users/users">
            <a>All Users</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
