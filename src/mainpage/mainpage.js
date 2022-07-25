import React from 'react';
import Carousel from 'react-multi-carousel';
import responsive from '../utils/responsive';
import MainPageCard from './card';

function Mainpage() {
  return (
    <div className="flex flex-col justify-center text-center w-full">
      <h2 className="font-bold text-3xl">New SuperBike Models</h2>
      <span>Please select a superbike model</span>
      <hr className="w-20 border-t-4 border-dotted mx-auto" />
      <div className="flex justify-center w-full">
        <Carousel
          className="w-full"
          keyBoardControl
          itemClass="mr-10"
          partialVisbile="false"
          infinite
          responsive={responsive(3, 2, 1)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <MainPageCard key={item} index={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Mainpage;
