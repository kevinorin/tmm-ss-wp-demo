import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import StayUtilBar from "../components/StayUtilBar";
import StayCard from "../components/StayCard"; // Adjust the path as necessary
import Footer from "../components/Footer";

// Define a type for the post structure
interface Post {
  id: number;
  title: { rendered: string };
  acf?: {
    location?: { address: string };
    nightly_rate?: string;
    cleaning_fee?: string;
    photos?: { url: string };
  };
}

export default async function Home() {
  let wpData: Post[] = []; // Use the Post type for your state
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
    <div>
      <Header />
      <Banner />
      <StayUtilBar />
      <main className="w-full mx-auto px-5 lg:px-20">
        <section className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {wpData.map((post: Post) => ( // Explicitly declare the type of 'post'
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
      <Footer />
    </div>
  );
}
