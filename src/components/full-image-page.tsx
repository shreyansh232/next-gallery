// import { clerkClient } from "@clerk/nextjs/server";
// import { Button } from "~/components/ui/button";
// import { deleteImage, getImage } from "~/server/queries";

// export async function FullPageImageView(props: { photoId: string }) {
//   // const idAsNumber = Number(props.photoId);
//   // if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

//   const image = await getImage(parseInt(props.photoId));
//   if (!image) throw new Error("Image not found");

//   const userInfo = await clerkClient.users.getUser(image.userId);

//   return (
//     <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
//       <div className="flex-shrink flex-grow">
//         <img src={image.url} className="object-contain" alt={image.name} />
//       </div>
//       <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
//         <div className="border-b p-2 text-center text-xl">{image.name}</div>

//         <div className="p-2">
//           <div>Uploaded By:</div>
//           <div>{userInfo.fullName}</div>
//         </div>

//         <div className="p-2">
//           <div>Created On:</div>
//           <div>{image.createdAt.toLocaleDateString()}</div>
//         </div>

//         <div className="p-2">
//           <form
//             action={async () => {
//               "use server";

//               await deleteImage(parseInt(props.photoId));
//             }}
//           >
//             <Button type="submit" variant="destructive">
//               Delete
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";
import { deleteImage, getImage } from "~/server/queries";
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  console.log(image); // Add this line to check the image object
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          id="photoId"
          className=" flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name} </div>

        <div className="p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>

        <div className="p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(props.id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
