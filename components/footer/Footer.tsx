import { cacheLife } from "next/cache";

async function getCachedYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCachedYear();
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-3 mt-10">
      <div className="max-w-3xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {year} NextEcom. All rights reserved.
      </div>
    </footer>
  );
}
