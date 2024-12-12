// import Link from "next/link"
// const Home = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
   
//     Click <Link href="/documents/123"> <span className="text-blue-500 underline">&nbsp;here&nbsp;</span></Link> to go to the document id
   
//     </div>
//   );
// }


// export default Home;


"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  // Fetch the token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/getConvertToken");
        if (!response.ok) throw new Error("Failed to fetch token");
        const { token } = await response.json();
        setToken(token);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      }
    };

    fetchToken();
  }, []);

  // Log the token when it changes
  useEffect(() => {
    if (token) {
      console.log("Fetched JWT Token:", token);
    }
  }, [token]);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Generated JWT Token</h1>
      {error && <div className="text-red-500">{error}</div>}
      {token ? (
        <div className="bg-blue-100 p-2 rounded-md mt-2">
          <strong>JWT Token:</strong>
          <pre className="whitespace-pre-wrap break-all">{token}</pre>
        </div>
      ) : (
        <div className="text-gray-500 mt-2">Fetching token...</div>
      )}
    </div>
  );
}
