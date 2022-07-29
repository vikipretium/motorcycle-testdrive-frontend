/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function MainPageCard({ motorcycle }) {
  return (
    <div data-testid="cardtest" className="flex flex-col items-center m-10 gap-2">
      <Link
        className="no-underline text-black"
        key={motorcycle.id}
        to={`/motorcycle/${motorcycle.id}`}
      >
        <div className="flex rounded-full bg-neutral-300 w-64 h-64 mt-24">
          <img
            src={motorcycle.image}
            alt="Bike Model"
            className="m-auto w-full"
          />
        </div>
        <span className="text-xl font-mono">{motorcycle.name}</span>
      </Link>
      <hr className="w-20 border-t-4 border-dotted mx-auto" />
      <p className=" text-xs self-center">{motorcycle.specification}</p>
      <div className="flex justify-center gap-3 text-2xl">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
      </div>
    </div>
  );
}

export default MainPageCard;
