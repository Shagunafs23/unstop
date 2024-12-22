import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
    </Suspense>
  );
}
