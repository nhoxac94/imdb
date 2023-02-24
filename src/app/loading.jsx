import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex justify-center'>
      <Image src='Spinner.svg' alt='loading...' fill />
    </div>
  );
};

export default Loading;
