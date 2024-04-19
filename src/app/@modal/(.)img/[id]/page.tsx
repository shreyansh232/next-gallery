import { getImage } from "~/server/queries";
import { Modal } from "./modal";
export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {


  const image = await getImage(parseInt(photoId));
  console.log(image); // Add this line to check the image object
  return (
  <Modal>
    <img src={image.url} id="photoId" className="w-96"/>
  </Modal>
  );
}

