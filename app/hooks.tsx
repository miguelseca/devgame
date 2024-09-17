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


interface useDynamicTransitionProps {
  increment: number;
  delay: number;
  length: number;
};

export const useDynamicTransition = (props: useDynamicTransitionProps) => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + props.increment) % props.length; 
            });
    }, props.delay);

    // isto corresponde a um unmount: return um a callback function
    return () => {
      console.log("remove interval");
      clearInterval(intervalId);
    };
  }, [props.delay, props.increment]);

  return index;

}