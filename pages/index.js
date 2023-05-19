// import components
import Hero from '../components/Hero';
import About from '../components/About';
import How from '../components/How';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

// import data
import { headerData, navData, heroData, aboutData, howData, faqData, testimonialData, footerData } from '../data.json'

const Home = ({ headerData, navData, heroData, aboutData, howData, faqData, testimonialData, footerData }) => {
  return (
    <div className='overflow-hidden max-w-[1600px] mx-auto bg-page'>
      <Hero headerData={headerData} navData={navData} heroData={heroData} />
      <About aboutData={aboutData} />
      <How howData={howData} />
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData} />
      <Footer footerData={footerData} />
      <Copyright />
      <div className='h-[2000px]'></div>
    </div>
  );
};

// fetch data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData, navData, heroData, aboutData, howData, faqData, testimonialData, footerData
    }
  }
}


export default Home;
