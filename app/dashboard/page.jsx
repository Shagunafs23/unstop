import { Suspense } from 'react';
import page from '../_components/page';

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <YourComponent />
    </Suspense>
  );
}
