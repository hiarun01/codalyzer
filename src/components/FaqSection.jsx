import React from "react";

const FaqSection = () => {
  return (
    <div className=" w-[100vw] flex flex-col justify-between items-center py-15 h-full">
      <h2 className="text-red-700 my-10 font-bold text-2xl ">How it Wokrs -</h2>
      <div className="w-[90vw]  space-y-10">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden w-full"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-red-700 p-4 text-gray-900 dark:border-gray-700 dark:bg-red-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden w-full">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-red-800 p-4 text-gray-900 dark:border-gray-700 dark:bg-red-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden w-full">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-red-800 p-4 text-gray-900 dark:border-gray-700 dark:bg-red-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </div>
  );
};

export default FaqSection;
