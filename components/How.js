import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, staggerTextContainer } from '../variants'


const How = ({ howData }) => {
  const { title, subtitle, girlImg } = howData
  return <section className='mb-[60px] lg:mb-[160px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10 items-center'>
        <div>
          <Image src={girlImg} alt="girlImg" width={720} height={678} />
        </div>
        <div className="flex">
          <div>
            <motion.h3 className='h3'>
              {title}
            </motion.h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default How;
