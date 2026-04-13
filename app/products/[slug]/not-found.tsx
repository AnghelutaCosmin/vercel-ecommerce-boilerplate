import Link from "next/link";

export default function NotFoundProduct() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-16">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-600">
        Sorry, the product you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
