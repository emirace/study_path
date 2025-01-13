import IMAGES from "../../../assets/images/images";

function OurClient() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center w-full">
        <p className="text-teal-500 uppercase font-semibold tracking-wide text-sm">
          LATEST UPDATE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Our Top Schools</h2>
      </div>
      <div className="relative w-full p-2 md:p-0">
        <div className="hidden md:block p-2 left-0 w-full">
          <img src={IMAGES.background1} className="h-auto w-full" />
        </div>
        <div className="md:absolute bg-teal-600 md:bg-transparent  left-0 top-0 z-10 w-full flex items-center justify-center h-full p-4 rounded-md ">
          <div className=" w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 ">
            {[
              "UNIVERSITY",
              "LOCATION",
              "SCHOOL",
              "SCHOOL",
              "UNIVERSITY",
              "LOCATION",
              "SCHOOL",
              "UNIVERSITY",
              "LOCATION",
            ].map((text) => (
              <div className="text-center text-white text-lg font-bold">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClient;
