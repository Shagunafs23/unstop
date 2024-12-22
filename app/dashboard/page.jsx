import { useSearchParams } from 'next/navigation'; // or wherever you are using it
import { Suspense } from 'react';

function DashboardPage() {
  const searchParams = useSearchParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {/* Your component content */}
        <h1>Dashboard</h1>
        <p>Search Parameter: {searchParams.get('param')}</p>
      </div>
    </Suspense>
  );
}

export default DashboardPage;
