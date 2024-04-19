import { getImage } from "~/server/queries";
export default async function FullPageImageView(props: {id: number}){


  const image = await getImage(props.id);
  console.log(image); // Add this line to check the image object
  return (
    <img src={image.url} id="photoId" className="w-96"/>

  );
}
