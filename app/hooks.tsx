import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<any>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
               setResult(data);
               setLoading(false);
             })
             .catch((error) => {
               console.error("Error fetching joke:", error);
               setLoading(false);
             });


      
  }, []);

  return { loading: loading, result: result };
};
