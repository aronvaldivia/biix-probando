import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Loader } from './Loader';

interface SceneProps {
  url: string;
}

export const Scene: React.FC<SceneProps> = ({ url }) => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loader />}>
        <Spline scene={url} />
      </Suspense>
    </div>
  );
};