import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";




//This function is important as now only this function getImages is called instead of again and again making calls to the DB 
export async function getMyImages(){ //getMyImages is important for a specific user

    const user = auth();
    
    if(!user.userId) throw new Error("Unauthorized");
    
  const images = await db.query.images.findMany({

    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, {desc}) => desc(model.id), // order by id desc, so the latest images are shown first
  });
  return images;
}