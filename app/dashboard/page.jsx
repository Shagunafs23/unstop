'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function Dashboard() {
  const searchParams = useSearchParams();

  // Your component logic goes here
  return (
    <div>
      {/* Your dashboard content */}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
