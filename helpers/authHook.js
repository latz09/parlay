import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function useAuth() {
  const router = useRouter();
  const { status, data: session } = useSession();
  // console.log(status, session);
 
  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [router, status]);

  return session;
}