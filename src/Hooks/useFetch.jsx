import { useEffect, useState } from "react";

const FETCH_TIMEOUT_MS = 8000; // 8 second timeout

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Set a timeout to abort the fetch if it takes too long
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, FETCH_TIMEOUT_MS);

    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url, { signal });

        if (!resp.ok) {
          throw new Error(`API error: ${resp.status} ${resp.statusText}`);
        }

        const json = await resp.json();
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err.message || "An unknown error occurred");
        } else {
          // If aborted by timeout, set a user-friendly error
          setError("Request timed out. Please try again later.");
        }
      } finally {
        clearTimeout(timeoutId);
        if (!signal.aborted) {
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to abort fetch on unmount or url change
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
