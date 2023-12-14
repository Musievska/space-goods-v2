export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 h-96 animate-pulse">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-2 text-center justify-center">
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
      </div>
    </div>
  );
};
