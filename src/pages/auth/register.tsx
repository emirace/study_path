import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full h-3/4 relative">
        <h2 className="absolute top-0 left-0 w-full text-xl font-bold mb-6 bg-teal-600 p-4 text-white rounded-t-lg ">
          Start Your <span className="text-orange-500">Journey</span>
        </h2>
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-600 focus:outline-none"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form className="p-6 pt-20 h-full overflow-y-auto">
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-600"
              >
                Country of Residence
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
                placeholder="Enter your country"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="studyLevel"
                className="block text-sm font-medium text-gray-600"
              >
                Intended Level of Study
              </label>
              <select
                id="studyLevel"
                name="studyLevel"
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
                required
              >
                <option value="">Select a level</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="phd">PhD</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="intake"
              className="block text-sm font-medium text-gray-600"
            >
              Preferred Intake
            </label>
            <input
              type="month"
              id="intake"
              name="intake"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message or Questions
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Enter any questions or additional information"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded focus:outline-none "
          >
            Register
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
