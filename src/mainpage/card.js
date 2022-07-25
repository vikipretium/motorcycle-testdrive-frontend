/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import hyabusa from '../assets/images/main_page/01_hyabusa.png';
import superveloce from '../assets/images/main_page/02_supervelocity.png';
import f3 from '../assets/images/main_page/03_f3.png';
import r1 from '../assets/images/main_page/04_r1.png';
import drag from '../assets/images/main_page/05_drag.png';
import cbr from '../assets/images/main_page/06_cbr.png';
import sdevo from '../assets/images/main_page/07_1290r.png';
import rush from '../assets/images/main_page/08_rush.png';
import panigale from '../assets/images/main_page/09_panigale.png';
import h2r from '../assets/images/main_page/10_h2r.png';

function MainPageCard({ index }) {
  const [images, setImages] = useState([
    hyabusa,
    superveloce,
    f3,
    r1,
    drag,
    cbr,
    sdevo,
    rush,
    panigale,
    h2r,
  ]);
  const [bg, setBg] = useState([
    'bg-neutral-300',
    'bg-yellow-600',
    'bg-red-600',
    'bg-blue-700',
    'bg-amber-400',
    'bg-blue-900',
    'bg-orange-500',
    'bg-yellow-600',
    'bg-red-600',
    'bg-green-400',
  ]);
  const randomBg = () => Math.floor(Math.random() * bg.length);
  return (
    <div className="flex flex-col items-center">
      <div className={`flex rounded-full ${bg[randomBg()]} w-1/3  mt-24`}>
        <img src={images[index]} alt="hyabusa" className="m-auto max-w-full" />
      </div>
      <span className="text-4xl font-mono">Hyabusa</span>
      <hr className="w-20 border-t-4 border-dotted mx-auto" />
      <p className="w-full text-xs self-center">
        Famed for its abundant power, agility and majestic presence. Legendary
        for establishing levels of ultimate sport performance and retaining its
        position atop the class it created for over two decades. The latest
        generation provides even smoother power delivery, nimbler handling, and
        a collection of electronic assist systems that make the Hayabusa more
        controllable, predictable and reliable. And all this wrapped in a
        package with breathtaking style and grace.
      </p>
      <div className="flex justify-center gap-3 text-2xl">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
      </div>
    </div>
  );
}

export default MainPageCard;
