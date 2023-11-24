export const CartSkeleton = () => {
    return (
      <div className="flex flex-col md:flex-row w-full h-full px-6 py-3 justify-center animate-pulse">
        <div className="w-full flex flex-col h-fit gap-4 p-4">
          <div className="bg-gray-300 h-8 w-1/4 rounded-md"></div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col p-4 shadow-md border rounded-sm">
              <div className="flex flex-row gap-3">
                <div className="bg-gray-300 h-28 w-28 rounded-md"></div>
                <div className="flex flex-col gap-1">
                  <div className="bg-gray-300 h-4 w-3/4 rounded-md"></div>
                  <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="bg-gray-300 h-10 w-24 rounded-md"></div>
                <div className="bg-gray-300 h-10 w-24 rounded-md ml-4"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col h-fit gap-4 p-4">
          <div className="bg-gray-300 h-8 w-1/4 rounded-md"></div>
          <div className="flex flex-col p-4 gap-4 shadow-md border rounded-sm">
            <div className="bg-gray-300 h-4 w-full rounded-md"></div>
            <div className="bg-gray-300 h-4 w-full rounded-md"></div>
            <div className="bg-gray-300 h-4 w-full rounded-md"></div>
            <div className="bg-gray-300 h-10 w-full rounded-md mt-4"></div>
          </div>
        </div>
      </div>
    );
  };