import Link from 'next/link'
import { useCartStorage, useUserStorage } from "../../services/storageAdapter";
import styles from "./Header.module.css";

export function Header() {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Co0o0o0o0okie!!!1 🍪
      </Link>

      {!user ? (
        <Link href="/auth">Log in</Link>
      ) : (
        <Link href="/user">
          {user.name} ({cart.products.length})
        </Link>
      )}
    </header>
  );
}
