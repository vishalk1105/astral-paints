"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NextCarousel from "./components/NextCarousel";
import { query } from "./constants/data";
import Container from "./components/Container";
import Footer from "./components/Footer";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://astralpaints.kwebmakerdigitalagency.com/graphql",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result?.data?.pages?.nodes[0]?.homepage);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <h2>Error: {error}</h2>
        <p>Please try refreshing the page.</p>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <NextCarousel data={data} />
      <Container data={data} />
      <Footer />
    </div>
  );
}
