import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // The useEffect hook runs every time the component renders
  useEffect(() => {
    fetch(url)
      .then(res => {
         // If the response is not ok, throw an error
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource')
        }

        // Returns another promise
        // This parses the json into a javascript object
        return res.json()
      })
      // This takes in the data that comes from the previous then method - res.json()
      .then(data => {
        setData(data)
      })
      // If any error occurs during the fetch request or JSON parsing
      .catch(error => {
        // Set the error state, so the error message can be sent to other components and then logged to the console
        setError(error.message)
      })
  }, [url])

  return { data, error }
}

export default useFetch
