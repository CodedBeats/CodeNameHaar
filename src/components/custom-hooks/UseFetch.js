import { useState, useEffect } from "react"

function useFetch(url) {

    // useState stuff
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url, {signal: abortController.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("Could not fetch data for this reseource")
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            // `catch` catches any network error 
            .catch(error => {
                if (error.name === "AbortError" ) {
                    console.log("Fetch Aborted")
                } else {
                    setIsLoading(false)
                    setError(error.message)
                }
            })

        return () => abortController.abort()
    }, [url])

    return { data, isLoading, error }

}

export default useFetch