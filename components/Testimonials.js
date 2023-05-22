import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerTextContainer } from '../variants'
import Slider from './Slider'

const Testimonials = ({ testimonialData }) => {
  const { pretitle, title, clients } = testimonialData
  return <section className="bg-pink-200 relative min-h-[600px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[40%]">
          <h3 className="h3">{pretitle}</h3>
          <h2 className="h2 mb-6">{title}</h2>
        </div>
        <div className="lg:w-[60%] lg:absolute lg:right-0">
          <Slider clients={clients} />
        </div>
      </div>

    </div>
  </section>;
};

export default Testimonials;
