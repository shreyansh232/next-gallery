import { Modal } from "./modal";
import  FullPageImageView  from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
       <FullPageImageView id={parseInt(photoId)}/>
    </Modal>
  );
}