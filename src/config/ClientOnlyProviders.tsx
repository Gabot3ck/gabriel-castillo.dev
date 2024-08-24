'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

export function ClientOnlyProviders({ children }: { children: React.ReactNode }) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <ParallaxProvider>{children}</ParallaxProvider>;
}
