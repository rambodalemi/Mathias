import { useEffect, useState } from 'react';

type CloudinaryImage = {
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
};

export default function useCloudinaryImages(folder: string) {
  const [images, setImages] = useState<CloudinaryImage[]>([]);

  useEffect(() => {
    if (!folder) return;
    fetch(`/api/cloudinary/images?folder=${encodeURIComponent(folder)}`)
      .then(res => res.json())
      .then(setImages);
  }, [folder]);

  return images;
}