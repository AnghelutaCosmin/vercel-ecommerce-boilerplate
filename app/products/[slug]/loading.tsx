export default function LoadingPageSkeleton() {
  return (
    <div className="flex flex-col w-full animate-pulse mt-8">
      <div className="flex flex-row space-between w-full grid-cols-2">
        <div className="bg-gray-300 h-[500px] w-full object-cover" />
        <div className="flex flex-col justify-content w-full p-4">
          <div className="bg-gray-300 h-6 w-1/2 mb-4" />
          <div className="bg-gray-300 h-5 w-1/4 mb-4" />
          <div className="bg-gray-300 h-4 w-full mb-2" />
          <div className="bg-gray-300 h-4 w-full mb-2" />
          <div className="bg-gray-300 h-4 w-full mb-2" />
        </div>
      </div>
    </div>
  );
}
