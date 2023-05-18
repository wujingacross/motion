import Image from 'next/image'
import Header from './Header'

const Hero = ({ heroData }) => {
  const { title, sceneImg, boyImg, girlImg, truckImg, btnText } = heroData
  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
      <div className="container mx-auto relative min-h-[800px] lg:min-h-[950px]">
        <div>
          <Header />
        </div>
        <h1 className='h1 max-w-[740px] text-white pt-[12rem] mb-[60px]'>{title}</h1>
        <button className='btn'>{btnText}</button>
        <div className='hidden lg:flex absolute bottom-0'>
          <Image src={girlImg} alt="girlImg" width={206} height={495} />
        </div>
        <div className='hidden lg:flex absolute -bottom-[25%] -left-[30%]'>
          <Image src={truckImg} alt="truckImg" width={811} height={395} />
        </div>
        <div className='hidden lg:flex absolute right-[380px] bottom-0 z-10'>
          <Image src={boyImg} alt="boyImg" width={206} height={495} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
