import React, { useEffect } from "react";
import { useFetcher, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../Context/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { isLoading, result, searchTerm, getResults } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // if (searchTerm ) {
    //   if (location.pathname === "/images") {
    //     getResults(`/imagesearch?q=${searchTerm}&gl=us&lr=lang_en&num=20&start=0`);
    //   }
    // }
    getResults(`/?query=${searchTerm}&limit=20&related_keywords=true`);
  }, [])

  if (isLoading) {
    return <Loading />;
  }
  console.log(location);

  switch (location.pathname) {
    case "/search":
      // console.log("Result:", result); // Add this line to see what 'result' contains
      return (
        <div className="flex flex-wrap justify-between md:justify-evenly sm:justify-start space-y-4 gap-5 sm:gap-2  sm:space-y-0 items-center p-8">
          {result?.results?.map(({ url, title }, index) => (
             <div key={index} className=" md:w-2/5 w-full ">
              <a href={url} target="_blank" rel="noreferrer">
                <p>
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-xl text-blue-600 dark:text-blue-300 hover:underline ">
                  {title}
                </p>
              </a>
             </div>
          ))}
        </div>
      );
    case "/images":
      return (
        "Images"
        // <div className="flex justify-center items-center">
        //   {result?.items?.map(({ thumbnailImageUrl, contextLink }, index) => (
        //    <a href={contextLink} target="_blank" rel="noreferrer" key={index}>
        //      <img src={thumbnailImageUrl} alt="img" className="w-60 h-60 object-cover" />
        //      {/* <span>{size}</span>
        //      <a href={contextLink} target="_blank" rel="noreferrer">{title}</a> */}
        //    </a>
        //   ))}
        // </div>
      );
    default:
      return "Error";
  }
};
