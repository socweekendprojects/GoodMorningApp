import { useEffect, useState } from "react";

export default function useFetch(url: string, dependencies?: string) {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    setLoading("loading...");
    if (undefined === url) {
      return;
    }

    fetch(url, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading("");
        setData(data);
        setError(null);
        console.log(data)
      })
      .catch((err) => {
        setData(null);
        setError(err);
      });
  }, []);

//     const fetchData = async function ({ url }: UseFetchProps) {
//       const response = await fetch(url, {
//         headers: { Accept: "application/json" },
//       });
//       const data = await response.json();
//       setLoading('')
//       setData(data);
//     };
//   }, dependencies);

//    loading = data === null && error == null;

   return {
     data: data,
     error: error,
     loading: loading,
   };
}

