import { getImage } from "~/server/queries";
export default async function FullPageImageView(props: {id: number}){


  const image = await getImage(props.id);
  console.log(image); // Add this line to check the image object
  return (
    <div className="flex w-full h-full min-w-0">
    <div className="flex-shrink flex justify-center items-center">
    <img src={image.url} id="photoId" className=" object-contain"/>
    </div>
    <div className="w-48 flex flex-col flex-shrink-0 border-l">
        <div className="text-xl font-bold">{image.name} </div>


       
    </div>
    </div>
  );
}


