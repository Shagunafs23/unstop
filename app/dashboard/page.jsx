import React, { Suspense } from 'react';
import MyComponent from './MyComponent';

const DashboardPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
};

export default DashboardPage;
