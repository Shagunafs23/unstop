"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import YourComponent from './YourComponent';  // Ensure the path is correct

function DashboardPage() {
  const searchParams = useSearchParams();

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
