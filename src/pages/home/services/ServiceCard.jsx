import React from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sdata from './Sdata';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
}
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];
  return (
    <>
     <Slider {...settings}>
     {Sdata.productItems.map((data) => {
      return(
        
        // console.log(data);
      
    
      <div style={{ perspective: 2000 }}>
        {/* card */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
          className='w-[326px] min-h-[500px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[20px] cursor-grab relative'
        >
          {/* card logo */}
          <div className='mb-6'>
            <img src={data.LogoImg} style={{ height: '40px' }} alt='' />
          </div>
          {/* card title */}
          <h1 className='text-4xl mb-4 font-extrabold'>{data.name}</h1>
          {/* card subtitle */}
          <p className='max-w-[300px] text-[#000000] mb-3'>
            Taking the classic look of heritage Nike Running into new realm, the
            Nike Air Max Pre-Day brings you a fast-paced look that's ready for
            today's world.
          </p>
          {/* btn & price wrapper */}
          <div className='flex items-center gap-x-[20px] mb-10'>
            <Link to={'/ds'}  className='bg-[#2d2b2c] text-white text-base font-small py-[12px] px-[16px] rounded-lg hover:cursor-pointer'>
              Add to Cart
            </Link>
            <div className='text-[24px] font-bold text-[#000000]'>$495.00</div>
          </div>
          {/* colors */}
          <ul className='flex gap-x-[10px]'>
            {colors.map((color, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: color.value }}
                  className='w-9 h-9 rounded-full cursor-pointer'
                ></li>
              );
            })}
          </ul>
          {/* card image */}
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100000 }}
            className='absolute top-4 -right-20 w-[320px]'
          >
            <img src={data.cover} alt='' draggable='false' />
          </motion.div>
        </motion.div>
      </div>
       )})}
      </Slider>
    </>
  );
};

export default ServiceCard;