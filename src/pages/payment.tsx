import { Link } from "react-router";
import IMAGES from "../assets/images/images";

const Payment = () => {
  const serviceFee = 150; // Fixed service fee in USD

  const handlePayment = () => {
    alert("Redirecting to payment gateway...");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-teal-50 to-teal-100 relative">
      <Link
        to="/"
        className="text-teal-600 text-lg absolute left-4 font-bold top-4 "
      >
        STUDY PATH
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="text-center mb-6">
          <img
            src={IMAGES.payment}
            alt="Payment Icon"
            className="mx-auto mb-4 w-20 h-20"
          />
          <h2 className="text-2xl font-bold text-teal-800">Payment Details</h2>
        </div>
        <div className="mb-6">
          <p className="text-gray-700 text-center">
            You are about to pay a fixed service fee for accessing our premium
            services.
          </p>
          <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
            <p className="text-sm text-gray-600">Service Fee:</p>
            <p className="text-xl font-semibold text-teal-800">
              $ {serviceFee}
            </p>
          </div>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg"
        >
          Make Payment
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          You will be redirected to a secure payment gateway.
        </p>
      </div>
    </div>
  );
};

export default Payment;
