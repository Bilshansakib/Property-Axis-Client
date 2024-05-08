import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const BookingForm = () => {
  const { user } = useAuth();
  const bookedForm = useLoaderData();
  const {
    _id,
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = bookedForm;

  const handleBookingForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = user?.email;

    const booking = {
      customerName: name,
      email: email,
      image: 1,
      date,
      service: estate_title,
      service_Id: _id,
      price: price,
      area,
      location,
      estate_title: 1,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Sweet!",
            text: "Wonderful Choice! See you soon",
            imageUrl: { image },
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      });
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Your Booking
        </h2>

        <form
          onSubmit={handleBookingForm}
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
            <label className="label"></label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={user.email}
              className="input input-bordered"
            />
            <label className="label"></label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              defaultValue={"Confirm"}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookingForm;
