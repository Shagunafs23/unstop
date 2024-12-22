import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const DashboardPage = () => {
  const searchParams = useSearchParams();
  // Your logic here...

  return (
    <div>
      {/* Your component rendering */}
    </div>
  );
};

const DashboardWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DashboardPage />
  </Suspense>
);

export default DashboardWithSuspense;
