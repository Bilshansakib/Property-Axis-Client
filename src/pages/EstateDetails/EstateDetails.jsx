import { useParams, useLoaderData, Link } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import "animate.css";
import { Helmet } from "react-helmet-async";
const EstateDetails = () => {
  const estated = useLoaderData();
  // const { _id } = useParams();
  // const data = estated.find((data) => data._id == _id);
  // console.log(data);
  const { id } = useParams();
  const data = estated.find((data) => data._id == id);
  console.log(id);
  console.log(estated);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = data;
  console.log(data);
  return (
    <>
      <div className="bg-[url('/image/privateLand.jpg')] max-w-6xl px-6 py-16 mx-auto space-y-12">
        <article className="animate__animated animate__bounce space-y-8 p-4 rounded-lg text-gray-900">
          <div className="space-y-6">
            <h1
              data-aos="slide-left"
              data-aos-duration="1000"
              className="text-4xl font-bold md:tracking-tight md:text-5xl"
            >
              {estate_title}
            </h1>
            <div
              data-aos="slide-right"
              data-aos-duration="1000"
              className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600"
            >
              <div className="flex items-center md:space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-sm flex items-center gap-1">
                  Location • <p className="font-semibold"> {location}</p>
                </p>
              </div>
              <p
                data-aos="slide-left"
                data-aos-duration="1000"
                className="flex-shrink-0 gap-1 mt-3 text-sm md:mt-0 flex items-center"
              >
                <GiFarmer size={20} /> Segment •
                <p className="font-semibold"> {segment_name}</p>
              </p>
            </div>
          </div>
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            className="text-gray-800"
          >
            <p>{description}</p>
          </div>
          <div className="font-semibold text-2xl flex hover:animate-bounce duration-1">
            <p>Price • {price}</p>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50"
            >
              <span>Current status :</span>
              <span className="font-semibold ml-4">{status}</span>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50"
            >
              <span>Total Area :</span>
              <span className="font-semibold ml-4">{area}</span>
            </a>
            <Link to={`/booking/${id}`}>
              <button
                rel="noopener noreferrer"
                href="#"
                className="px-3  py-1 rounded-sm hover:underline bg-violet-600 text-gray-50"
              >
                Booking
              </button>
            </Link>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Facilities</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  {facilities[0]}
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  {facilities[1]}
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  {facilities[2]}
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="my-4 object-cover bg-cover  shadow-2xl"
          >
            <img src={image} />
          </div>
        </div>
        <Helmet>
          <title>Estate Details : 0{id}</title>
        </Helmet>
      </div>
    </>
  );
};

export default EstateDetails;
