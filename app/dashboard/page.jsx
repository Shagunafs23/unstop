import { Suspense } from 'react';
import YourComponent from '../components/YourComponent';

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <YourComponent />
    </Suspense>
  );
}
