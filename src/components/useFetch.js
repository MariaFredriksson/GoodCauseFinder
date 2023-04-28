import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)

  // The useEffect hook runs every time the component renders
  useEffect(() => {
    fetch(url)
      .then(res => {
         // If the response is not ok, throw an error
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        // console.log(res)
        // console.log(res.json());

        // Returns another promise
        // This parses the json into a javascript object
        return res.json()
      })
      // This takes in the data that comes from the previous then method - res.json()
      .then(data => {
        setData(data)
      })
  }, [url])

  return { data }
}

export default useFetch



// import { useState, useEffect } from 'react';

// //* Custom hooks in React need to start with the word use
// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   const [isPending, setIsPending] = useState(true);

//   //* Create a state to save the error message
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const abortCont = new AbortController();

//     //* Connect this abortController to this fetch
//     fetch(url, { signal: abortCont.signal })
//       //* The fetch method returns a promise, so we can use the then method to get the response
//       .then(res => {
//         //* If the response is not ok, throw an error
//         if (!res.ok) {
//           throw Error('Could not fetch the data for that resource');
//         }
//         return res.json();
//       })
//       //* The then method also returns a promise, so we can use another then method to get the data
//       .then(data => {
//         setData(data);
//         setIsPending(false);

//         //* Update the error state to null, so the error message doesn't show anymore if the error was fixed and the data is retrieved successfully
//         setError(null);
//       })
//       //* Catch server errors
//       .catch(err => {
//         //* If the fetch was aborted, don't update the error state
//         if (err.name === 'AbortError') {
//           console.log('Fetch aborted');
//         } else {
//           //* Update the error state
//           setError(err.message);

//           //* Update the isPending state to not show the loading message
//           setIsPending(false);
//         }
//       });
//     //* Use the associated abortController to stop the fetch if we navigate away from the page and the fetch should not be executed
//     return () => abortCont.abort();
//   }, [url]);

//   //* Return the states so they can be used in other components
//   return { data, isPending, error };
// }

// //* Export the custom hook so it can be used in other components
// export default useFetch;