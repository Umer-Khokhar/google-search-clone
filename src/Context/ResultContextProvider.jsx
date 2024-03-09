// ResultContextProvider.js
import React, { createContext, useContext, useState } from "react";

const resultContext = createContext();
const baseUrl = "https://google-web-search1.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Fix: Changed isloading to isLoading
  const [searchTerm, setSearchTerm] = useState("Web Development");

  // function for fetching the data from the api
  const getResults = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}${url}`, {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': 'b3260948a8msh5cd6ba1cc903996p145680jsn2c6a5b265677',
          'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResult(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can handle the error here, e.g., set error state, display error message, etc.
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <resultContext.Provider value={ {getResults, result, searchTerm, setSearchTerm, isLoading} }>
      {children}
    </resultContext.Provider>
  );
};

export const useResultContext = () => useContext(resultContext);

