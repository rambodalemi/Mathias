"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import useCloudinaryImages from "@/hooks/useCloudinaryImages";

type MasonryGrid2026Props = {
  folder: string;
};

export default function MasonryGrid2026({ folder }: MasonryGrid2026Props) {
  const images = useCloudinaryImages(folder);

  const safeImages = Array.isArray(images) ? images : [];

  const breakpointColumnsObj = {
    default: 2,
    1024: 2,
    768: 2,
    640: 2,
    480: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {safeImages.map((image, index) => (
        <SmartImage
          priority={index < 10}
          sizes="(max-width: 1024px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 8" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
          enlarge={true}
        />
      ))}
    </Masonry>
  );
}
