import Hero from '@/src /components/hero';
import HeroBottom from '@/src /components/heroBottom';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='w-max-[1540px] mx-auto'>
        <Hero />
        <HeroBottom />
      </div>
    </>
  );
}
