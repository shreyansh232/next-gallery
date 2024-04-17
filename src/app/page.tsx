import { db } from "~/server/db";

export const dynamic = "force-dynamic";


const mockUrls = [
  "https://utfs.io/f/5f6f4063-264b-4105-8947-faa611aac82c-1t9xah.png",
  "https://utfs.io/f/33f53e1b-621b-43ea-a89a-6e2bfec9982e-kxfbj6.png",
  "https://utfs.io/f/36db8f1a-e779-4997-ba6b-8d54c1c24a78-y5pedl.jpg",
  "https://utfs.io/f/23224830-5cf7-47b0-8c92-707a49d244ab-oo8xtv.12.44.jpeg",

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts =   await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
