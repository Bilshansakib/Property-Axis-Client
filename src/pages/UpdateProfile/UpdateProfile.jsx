import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import { data } from "autoprefixer";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, createUser, updateUserProfile } = useAuth();
  //

  const handleProfile = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("username");
    const photo = form.get("photo");
    console.log(name, photo);
    // password validation
    const { email, password, image, fullName } = data;

    const from = "/";
    // updateUserProfile(fullName, image).then(() => {
    //   Navigate(from);
    // });
    createUser(email, password).then(() => {
      updateUserProfile(fullName, image).then(() => {
        Navigate(from);
      });
    });
  };

  // user

  return (
    <>
      <Helmet>
        <title>P-Axis | Profile</title>
      </Helmet>
      <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <img
            src={user.photoURL}
            alt=""
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              {user.displayName}
            </h4>
            <p className="text-gray-600">
              Hello and welcome to our vibrant community! We're thrilled to have
              you join us on Property Axis.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-4 space-x-4 align-center">
          <h4 className="text-lg font-semibold text-center md:text-left">
            Update Your Profile
          </h4>
          <form
            onSubmit={handleProfile}
            noValidate=""
            action=""
            className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-violet-300"
          >
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Current Profile</p>

              <img
                src={user.photoURL}
                alt=""
                className="w-10 h-10 bg-gray-500 rounded-full"
              />
              <p className="text-xs">{user.displayName}</p>
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="text-gray-600 col-span-full sm:col-span-3"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                required
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="PhotoURL" className="block text-gray-600">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                id="PhotoURL"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            <button className=" w-full rounded-xl p-3 text-center  text-gray-50 bg-violet-600">
              Save Change
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
