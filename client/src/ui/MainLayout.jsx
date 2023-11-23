export const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-start w-full max-w-screen-xl mx-auto">
      <div className="px-2 sm:px-4 md:px-8">
        {children}
      </div>
    </main>
  );
};

