"use client";

import { useSearchParams } from 'next/navigation';
// import YourComponent from './YourComponent';  // Comment this out temporarily

function DashboardPage() {
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Search Parameter: {searchParams.get('param')}</p>
      {/* <YourComponent /> */}
    </div>
  );
}

export default DashboardPage;
