import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import responsive from '../utils/responsive';
import MainPageCard from './card';
import NavBar from '../side_navbar/Navbar';
import { fetchMotorcycles } from '../redux/motorcylce/motorcylceSlice';

function Mainpage() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycle.motorcycles);

  useEffect(() => {
    if (!motorcycles.length) {
      dispatch(fetchMotorcycles());
    }
  }, [motorcycles]);

  return (
    <NavBar>
      <div data-testid="mainpagetest" className="flex flex-col min-w-0 flex-1 justify-center text-center w-full">
        <h2 className="font-bold text-3xl">SUPERBIKE MODELS</h2>
        <span>Please select a superbike model</span>
        <hr className="w-20 border-t-4 border-dotted mx-auto" />
        <div className="flex justify-center w-full ">
          <Carousel
            className="w-full"
            keyBoardControl
            itemClass="mr-0"
            partialVisbile="false"
            infinite
            responsive={responsive(3, 2, 1)}
          >
            {motorcycles.map((item) => (
              <MainPageCard key={item.id} motorcycle={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </NavBar>
  );
}

export default Mainpage;
