export const Promo = () => {
    return (
      <div className="mx-auto my-6 max-w-4xl rounded-md bg-gradient-to-r from-red-500 to-red-500 p-4 text-center text-lg leading-7 font-medium text-white">
        <div className="flex items-center justify-center gap-2 text-2xl font-extrabold filter drop-shadow-sm">
          Save 25% on your next purchase!
        </div>
        <div className="mt-2 text-sm font-bold uppercase">
          Deal expires in 24 hours
        </div>
        <div className="flex items-center justify-end gap-1 text-sm italic">
          Learn more...
        </div>
      </div>
    );
  };
  
  export default Promo;