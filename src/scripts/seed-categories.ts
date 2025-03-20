import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Cars & Vehicles",
  "Gaming",
  "Technology & Gadgets",
  "Science & Space",
  "Education & Tutorials",
  "Movies & TV Shows",
  "Anime & Manga",
  "Music & Dance",
  "Sports & Fitness",
  "Health & Wellness",
  "Food & Cooking",
  "Travel & Adventure",
  "Fashion & Beauty",
  "Lifestyle & Vlogs",
  "History & Culture",
  "Business & Finance",
  "Motivation & Self-Improvement",
  "DIY & Crafts",
  "Photography & Filmmaking",
  "Art & Design",
  "News & Politics",
  "Comedy & Entertainment",
  "Pets & Animals",
  "Mystery & Paranormal",
  "ASMR & Relaxation",
  "Unboxing & Reviews",
  "Podcasts & Discussions",
  "Live Streams & Events",
  "Sensual & Aesthetic Arts",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLocaleLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
