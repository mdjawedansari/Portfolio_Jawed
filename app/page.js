import Details from '@/components/Details';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import React from 'react';

export const metadata = {
  title: "Ejaz Portfolio | Home 🏠",
  description: "Best portfolio website ",
};

export default function Home() {
  return (
    <>
      <section className="h-full">
        <div className='container  sm:px-[6rem] xl:container mx-auto h-full '>
          <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8  xl:pb-24'>
            {/* text */}
            <Details />
            <div className='order-1 xl:order-none mb-8 xl:mb-0'>
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
}
