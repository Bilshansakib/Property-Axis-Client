import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
const EstateCard = ({ estate }) => {
  const {
    _id,
    rating,
    comment,
    image,
    estate_title,
    segment_name,
    description,
    price,
    Status,
    area,
    location,
    facilities,
  } = estate;

  return (
    <div>
      <section className="px-5 py-10 mt-4 rounded-xl bg-[url('/image/banner.jpg')] text-gray-800">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <div className="flex flex-col space-y-8 md:space-y-12">
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    {segment_name}
                  </span>
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  {description}
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline text-violet-600"
                >
                  Owned by saaqib
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Facilities
                  </span>
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  <li>{facilities[0]}</li>
                  <li>{facilities[1]}</li>
                  <li>{facilities[2]}</li>
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 text-gray-600">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">
                    Area
                  </span>
                </h3>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  {area}
                </a>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 bg-violet-600">
                <div className="w-1/2 h-full bg-violet-600"></div>
              </div>
              <Link
                to={`/estateDetails/${_id}`}
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full"
              >
                <span className="text-2xl text-blue-500 font-bold  tracking-wider uppercase">
                  View Property
                </span>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 strokeCurrent text-violet-600"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="relative flex col-span-12 bg-center bg-no-repeat bg-cover  xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
          >
            {/* <img src={image} /> */}
            <div className="  absolute w-full ">
              <div className="flex flex-col items-center justify-between gap-10 space-y-20 p-6 text-center sm:p-8 group dark:via- flex-grow-1 ">
                <span className=" px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 text-violet-800 border-violet-600">
                  {location}
                </span>
                <span className="flex items-center mb-4 space-x-2 text-violet-600">
                  <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-600">
                    <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-600"></span>
                  </span>
                  <span className="text-sm font-bold">Live</span>
                </span>

                <h1
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif text-2xl font-semibold group-hover:underline text-white"
                >
                  {estate_title}
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-600">
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-600"
              >
                Article of Land
              </button>
              <button
                type="button"
                className="pb-5 text-xs font-bold uppercase border-b-2 border- text-gray-600"
              >
                Investors
              </button>
            </div>
            <div className="flex flex-col divide-y divide-gray-300">
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://source.unsplash.com/random/244x324"
                />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif ">
                    <span className="flex flex-col">
                      <span className=" text-blue-600 font-extrabold">
                        Comment:
                      </span>
                      <span className="hover:underline ">{comment}</span>
                    </span>
                  </a>
                  <p className="mt-auto text-xs text-gray-600">
                    15 days ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block text-blue-600 lg:ml-2 lg:inline hover:underline"
                    >
                      <span className="flex items-center gap-2">
                        <IoIosStar />
                        {rating}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              {/* <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://source.unsplash.com/random/245x325"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Nulla consectetur efficitur.
                  </a>
                  <p className="mt-auto text-xs text-gray-600">
                    14 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="text-blue-600 lg:ml-2 lg:inline hover:underline"
                    >
                      Sports
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://source.unsplash.com/random/246x326"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Vitae semper augue purus tincidunt libero.
                  </a>
                  <p className="mt-auto text-xs text-gray-600">
                    22 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block text-blue-600 lg:ml-2 lg:inline hover:underline"
                    >
                      World
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img
                  alt=""
                  className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                  src="https://source.unsplash.com/random/247x327"
                />
                <div className="flex flex-col flex-grow">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="font-serif hover:underline"
                  >
                    Suspendisse potenti.
                  </a>
                  <p className="mt-auto text-xs text-gray-600">
                    37 minutes ago
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="block text-blue-600 lg:ml-2 lg:inline hover:underline"
                    >
                      Business
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="divider rounded-full bg-blue-600"></div>
    </div>
  );
};

export default EstateCard;
