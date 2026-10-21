import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/types";
import { photoExists } from "@/lib/photo-exists";

type Props = {
  photo: PhotoData;
  sizes: string;
};

// Renders inside a `.ph` box: the photo when its file exists, otherwise the placeholder label.
export default function Photo({ photo, sizes }: Props) {
  if (!photoExists(photo.src)) return <>{photo.label}</>;

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      style={{ objectFit: "cover", objectPosition: photo.position }}
    />
  );
}
