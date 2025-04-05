'use client';

import GameHeader from '@/components/dashboard/game-header';
import GameNavigation from '@/components/layout/navigation';
import React from 'react';

export default function DashboardLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='min-h-screen bg-[#1E1E1E] text-white '>
      <GameHeader firePoints={8} xpPoints={12} />
      {children}
      <GameNavigation />
    </div>
  );
}
