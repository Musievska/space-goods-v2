export const GallerySkeleton = () => {
  return (
    <section className="animate-pulse text-gray-700 body-font overflow-hidden bg-white">
    <div className="container mx-auto px-5 py-24">
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-1/2 w-full px-4">
          <div className="bg-gray-300 h-48 w-full rounded"></div>{" "}
          {/* Full width for the image container */}
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-4">
          <div className="h-12 bg-gray-300 rounded mb-4 w-full"></div>{" "}
          {/* Full width for the title */}
          <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>{" "}
          {/* Slightly reduced width for description */}
          <div className="h-6 bg-gray-300 rounded mb-4 w-full"></div>{" "}
          {/* Full width for additional details */}
          <div className="flex mt-4">
            <div className="h-12 bg-gray-300 rounded w-32 mr-4"></div>{" "}
            {/* Width for price */}
            <div className="h-12 bg-gray-300 rounded w-32"></div>{" "}
            {/* Width for rating */}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
