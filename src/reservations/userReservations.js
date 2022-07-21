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

// ActiveRecord::Schema[7.0].define(version: 2022_07_19_100658) do
//   # These are extensions that must be enabled in order to support this database
//   enable_extension "plpgsql"

//   create_table "motorcycles", force: :cascade do |t|
//     t.string "name"
//     t.string "image"
//     t.string "specification"
//     t.integer "price"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false
//   end

//   create_table "reservations", force: :cascade do |t|
//     t.bigint "user_id", null: false
//     t.bigint "motorcycle_id", null: false
//     t.string "city"
//     t.string "date"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false
//     t.index ["motorcycle_id"], name: "index_reservations_on_motorcycle_id"
//     t.index ["user_id"], name: "index_reservations_on_user_id"
//   end

//   create_table "users", force: :cascade do |t|
//     t.string "full_name"
//     t.string "email"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false
//     t.string "password_digest"
//   end

//   add_foreign_key "reservations", "motorcycles"
//   add_foreign_key "reservations", "users"
// end
