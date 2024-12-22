import { Suspense } from 'react';
import YourComponent from './YourComponent';

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <YourComponent />
    </Suspense>
  );
}
