"use client";  // This tells Next.js to treat this file as a client component

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import YourComponent from './YourComponent';  // Make sure this path is correct

function DashboardPage() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Search Parameter: {searchParams.get('param')}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <YourComponent />
      </Suspense>
    </div>
  );
}

export default DashboardPage;
