// At the top of your file
'use client';

import React from 'react';
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

export default DashboardPage;
