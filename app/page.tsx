import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import StayCard from "../components/StayCard"; // Make sure the path matches your file structure

export default async function Home() {
  let wpData = [];
  try {
    const response = await fetch("https://tmm-wp-demo.mysites.io/wp-json/wp/v2/posts");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    wpData = await response.json();
  } catch (error) {
    console.error("Failed to fetch:", error);
  }

  return (
    <div className="">
      <Header />
      <Banner />
      <main className="w-full mx-auto px-5 lg:px-20">
        <section className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {wpData.map((post) => (
              <StayCard
                key={post.id}
                title={post.title.rendered}
                location={post.acf?.location?.address || "Not specified"}
                nightlyRate={post.acf?.nightly_rate || "N/A"}
                cleaningFee={post.acf?.cleaning_fee || "N/A"}
                imageUrl={post.acf?.photos?.url || ""}
                imageAlt={`Image of ${post.title.rendered}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
