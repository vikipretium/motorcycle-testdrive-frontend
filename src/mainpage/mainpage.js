import React from 'react';
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

function Mainpage() {
  return (
    <div className="flex flex-col justify-center text-center w-full">
      <h2 className="font-bold text-3xl">New SuperBike Models</h2>
      <span>Please select a superbike model</span>
      <hr className="w-20 border-t-4 border-dotted mx-auto mt-12" />
      <div className="flex justify-center gap-20 w-full p-40">
        {/*  card1 */}
        <div className="flex flex-col gap-5 items-center">
          <div className="flex rounded-full bg-neutral-300 w-1/3  mt-24">
            <img src={hyabusa} alt="hyabusa" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">Hyabusa</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          {/* <p className="w-full text-xs self-center">
            Famed for its abundant power, agility and majestic presence.
            Legendary for establishing levels of ultimate sport performance and
            retaining its position atop the class it created for over two
            decades. The latest generation provides even smoother power
            delivery, nimbler handling, and a collection of electronic assist
            systems that make the Hayabusa more controllable, predictable and
            reliable. And all this wrapped in a package with breathtaking style
            and grace.
          </p> */}
          <p className="w-full text-xs self-center">
            The new MV Superveloce S takes attention to detail to the extreme.
            The new Surreal White exterior highlights the timeless lines, which
            were designed in a wind tunnel. The spoke wheels are an elegant
            tribute to the bikes of the past, but with the efficiency and weight
            of a modern wheel.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex rounded-full bg-yellow-600 w-1/3 mt-24">
            <img
              src={superveloce}
              alt="supervelocity"
              className="m-auto max-w-full"
            />
          </div>
          <span className="text-4xl font-mono">SuperVeloce S</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            The new MV Superveloce S takes attention to detail to the extreme.
            The new Surreal White exterior highlights the timeless lines, which
            were designed in a wind tunnel. The spoke wheels are an elegant
            tribute to the bikes of the past, but with the efficiency and weight
            of a modern wheel.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex rounded-full bg-red-600 w-1/3 mt-24">
            <img src={f3} alt="f3" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">F3</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            The F3 Rosso takes F3 characteristic features to the extreme. Lines
            designed for performance but projected into the future. Style and
            performance that find their maximum expression in the contrast
            between the red superstructure and the completely black components.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-blue-700 w-1/3 mt-24">
            <img src={r1} alt="r1" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">YFZ-R1</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            R HISTORY. YOUR FUTURE. WE R1. Featuring next‑generation R‑Series
            styling, sophisticated electronic control, supersport braking and
            suspension performance and a high‑performance crossplane engine.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-amber-400 w-1/3 mt-24">
            <img src={drag} alt="dragster" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">
            Dragster
            <br />
            RR SCS
          </span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            Inimitable, with a unique personality. The curves of the fuel tank
            and headlight, the bobbed tail and the elegant spoke wheels superbly
            frame the three-cylinder engine at the heart of the Dragster. Ready
            for action, bursting with exuberance and power.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-blue-900 w-1/3 mt-24">
            <img src={cbr} alt="cbr1000" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">
            Fireblade
            <br />
            CBR 1000RR-R
          </span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            Famed for its abundant power, agility and majestic presence. And all
            this wrapped in a package with breathtaking style and grace.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-orange-500 w-1/3 mt-24">
            <img
              src={sdevo}
              alt="Super Duke Evo"
              className="m-auto max-w-full"
            />
          </div>
          <span className="text-4xl font-mono">
            KTM 1290
            <br />
            SUPER DUKE R EVO
          </span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            Evolution and adaption are critical when it comes to maintaining
            status as the top dog. The KTM 1290 SUPER DUKE R EVO is a BEAST -
            evolved. Boasting intuitive Semi-Active Suspension Technology (SAT),
            this BEAST not only adapts to the road surface but also to the rider
            inputs - making it a cold, calculated hunter. A frightening prospect
            for any would-be challenger.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-yellow-600 w-1/3 mt-24">
            <img src={rush} alt="rush" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">Rush 1000</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            The design choices highlight the uniqueness of the idea behind the
            Rush, a bike meant for those who are not afraid to stand-out of the
            crowd with out-of-the-ordinary details, such as she lenticular
            rear-wheel, typical of acceleration races.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-red-600 w-1/3 mt-24">
            <img
              src={panigale}
              alt="ducati panigale"
              className="m-auto max-w-full"
            />
          </div>
          <span className="text-4xl font-mono">Panigale V4S</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            The Panigale V4 MY23 represents the last step in the characteristic
            path of Borgo Panigale sports bikes. As is the case with motorcycles
            engaged in MotoGP and WorldSBK, the Panigale V4 is updated and
            improved year after year, and the 2022 version represents the most
            significant evolution since its launch year. For MY2023, a series of
            electronic improvements have been introduced that make the bike even
            easier and more intuitive for riders of all levels.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <div className="flex justify-center rounded-full bg-green-400 w-1/3 mt-24">
            <img src={h2r} alt="h2r" className="m-auto max-w-full" />
          </div>
          <span className="text-4xl font-mono">Ninja H2R</span>
          <hr className="w-20 border-t-4 border-dotted mx-auto" />
          <p className="w-full text-xs self-center">
            The track-only variant is called Ninja H2R, and it is the fastest
            and most powerful production motorcycle on the market; it produces a
            maximum of 310 horsepower (230 kW) and 326 horsepower (243 kW) with
            ram air. The H2R has 50% more power than the fastest street-legal
            motorcycles, while the street-legal Ninja H2 has a lower power
            output of 200 hp (150 kW)[13]–210 hp (160 kW) with ram air.
          </p>
          <div className="flex justify-center gap-3 text-2xl">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
