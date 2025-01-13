import IMAGES from "../../../assets/images/images";

function BookNow() {
  return (
    <div className="relative w-full p-2 md:p-0">
      <div className="hidden md:block p-2 left-0 w-full">
        <img src={IMAGES.background2} className="h-auto w-full" />
      </div>
      <div className="absolute right-0  top-1/2 -translate-y-1/2 text-teal-500 text-9xl font-bold opacity-20 uppercase ">
        Study-path
      </div>

      <div className="md:absolute z-10 left-0 top-0 w-full h-full flex flex-col justify-center items-center bg-teal-600 md:bg-transparent rounded-md p-2 ">
        <div className="max-w-5xl w-full mx-auto">
          <p className="text-white uppercase font-semibold tracking-wide text-sm my-4 mt-8">
            LATEST UPDATE
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-12 w-full">
            <div className="text-3xl md:text-4xl  font-bold text-white">
              <div className="mb-2">Book an Appointment</div>
              <div>Call us now!</div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
