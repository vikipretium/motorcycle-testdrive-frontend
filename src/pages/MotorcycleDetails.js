import React from 'react';
import kawasaki from '../images/kawasaki.jpg';

const MotorcycleDetails = () => (
  <div className="flex flex-col gap-[30%] p-2 items-center justify-center md:w-4/5">
    <div className="flex  justify-center  w-full">
      <h1 className="font-semibold text-2xl">Kawasaki Ninja H2R</h1>
    </div>
    <div className="flex flex-col  gap-[10%] items-center md:flex-row md:gap-[10%] md:items-center">
      <div className="bg-amber-500 w-80 h-80 rounded-full mx-auto relative mb-4 flex justify-center md:w-[30rem] md:h-[15rem] md:rounded-full ">
        <div className="flex justify-center items-center content-center">
          <img className="w-[100%] h-[100%] md:w-[100%] md:h-[100%]" src={kawasaki} alt="img" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="w-[70%] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora eligendi! Nesciunt quibusdam autem, numquam velit quo aliquam, porro vero quae recusandae maiores error exercitationem quidem natus voluptatem ab placeat.</p>
        <div className="w-[70%] ">
          <p>Finance fee: $4000 </p>
          <p>Option to Purchase fee: $20000</p>
          <p>Total amount payable: $37000</p>
          <p>Duration: 24 months</p>
        </div>
        <div>
          <button type="button" className="bg-amber-500    hover:bg-amber-600/80 text-white font-bold py-2 px-4 rounded w-52">
            Reserve
          </button>
        </div>
        <span />
      </div>
    </div>
  </div>
);

export default MotorcycleDetails;
