import styles from './Auth.module.css';

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { useAuthenticate } from '../../application/authenticate';
import { UserName } from '../../domain/user';

export function Auth() {
  const router = useRouter();
  const [name, setName] = useState<UserName>('');
  const [email, setEmail] = useState<Email>('');
  const [loading, setLoading] = useState(false);

  const { user, authenticate } = useAuthenticate();

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    await authenticate(name, email);
    setLoading(false);
  }

  useEffect(() => {
    if (!!user) {
      router.replace('/');
    }
  }, [router, user]);

  if (!!user) {
    return null;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? 'Trying to login...' : 'Login'}
      </button>
    </form>
  );
}
