"use client"; // This directive must be at the top of the file

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import YourComponent from './YourComponent'; // Ensure this path is valid

function DashboardPage() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Fallback UI for SSR
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Search Parameter: {searchParams.get('param')}</p>
      <Suspense fallback={<div>Loading YourComponent...</div>}>
        <YourComponent />
      </Suspense>
    </div>
  );
}

export default DashboardPage;
