import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useUserStorage } from "../../services/storageAdapter";
import { Buy } from "../Buy";
import { Cart } from "../Cart";
import { Orders } from "../Orders";
import { Profile } from "../Profile";

export function User() {
  const router = useRouter();
  const { user } = useUserStorage();

  useEffect(() => {
    if (!user) {
      router.replace('/auth');
    }
  }, [router, user]);

  if (!user) {
    return null;
  }

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}
