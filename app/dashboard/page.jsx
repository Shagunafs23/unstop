"use client"; // Add this directive at the top of the file

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import YourComponent from './YourComponent'; // Ensure this path is correct

function DashboardPage() {
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Fallback for SSR
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Search Parameter: {searchParams.get('param')}</p>
      <Suspense fallback={<div>Loading dashboard...</div>}>
        <YourComponent />
      </Suspense>
    </div>
  );
}

export default DashboardPage;
