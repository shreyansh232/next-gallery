import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id), // order by id desc, so the latest images are shown first
  
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} className="w-full h-full object-cover" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
