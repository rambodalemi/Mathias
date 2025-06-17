import { Flex, Text } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import MasonryGrid2 from "@/components/gallery/MasonryGrid2";

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
      paddingX="104"
      gap="l"
      direction="column"
      align="center"
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
      <Text
        size="l"
        variant="heading-default-xl"
      >
        Galerie Isabelle Mézières en 2014.
        <br />
        Photographies : Christophe Mézières
      </Text>
      <MasonryGrid />

      <Text variant="heading-default-xl">
        Galerie XXI en 2023
        <br />
        Michel Blachère
      </Text>
      <MasonryGrid2 />
    </Flex>
  );
}
