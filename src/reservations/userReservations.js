const UserReservations = () => {
  const fakeData = [{ bike: 'Daihatsu', city: 'Lusaka', date: '30-07-2022' },
    { bike: 'BMW', city: 'Lusaka', date: '03-08-2022' },
    { bike: 'Yamaha', city: 'Lusaka', date: '05-08-2022' },
    { bike: 'Harley Davidson', city: 'Lusaka', date: '08-08-2022' }];
  return (
    <div className="container w-full">
      <h1 className="text-center my-4 p-2 text-lg"> MY RESERVATIONS </h1>
      <div className="grid grid-cols-4 gap-4 mx-auto text-center">
        <div> BIKE </div>
        <div> CITY </div>
        <div> DATE </div>
        <div>{}</div>
        {fakeData.map((element) => (
          <>
            <div>{element.bike}</div>
            <div>{element.city}</div>
            <div>{element.date}</div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-20"
              type="button"
            >
              DELETE
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserReservations;
