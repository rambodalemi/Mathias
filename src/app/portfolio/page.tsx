import { Flex, Text } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import MasonryGrid2 from "@/components/gallery/MasonryGrid2";
import MasonryGrid2025 from "@/components/gallery/MasonryGrid2025";
import MasonryGrid2026 from "@/components/gallery/MasonryGrid2026";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (

    <Flex
      as="header"
      fillWidth
      horizontal="center"
      paddingY="l"
      paddingX="m"
      gap="l"
      direction="column"
      align="center"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Text variant="heading-default-xl">
        Galerie de Mathias Perez
      </Text>
      <Text variant="body-default-m" style={{ marginBottom: "2rem", opacity: 0.7 }}>
        Cliquez sur une image pour l'agrandir
      </Text>

      <Text variant="heading-default-xl">
        à Auvers-sur-Oise
        <br />
        2026
      </Text>
      <MasonryGrid2026 folder="2026" />

      <Text variant="heading-default-xl">
        à Auvers-sur-Oise
        <br />
        2025
      </Text>
      <MasonryGrid2025 folder="2025" />

      <Text variant="heading-default-xl">
        Galerie XXI en 2023
        <br />
        Michel Blachère
      </Text>
      <MasonryGrid2 folder="Galerie_XXI" />

      <Text
        size="l"
        variant="heading-default-xl"
      >
        Galerie Isabelle Mézières en 2014.
        <br />
        Photographies : Christophe Mézières
      </Text>

      <MasonryGrid folder="galerie_isabelle" />
    </Flex>
  );
}
