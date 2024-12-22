import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function DashboardPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;  // or any fallback for SSR
  }

  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Search Parameter: {searchParams.get('param')}</p>
    </div>
  );
}

export default DashboardPage;
