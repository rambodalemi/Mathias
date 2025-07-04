import React from "react";

import { Heading, Flex, Text, Button, Avatar, Column, Badge, Row } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured && (
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          )}
          <Heading wrap="balance" variant="display-strong-l">
            {home.headline}
          </Heading>
          <Heading wrap="balance" onBackground="neutral-weak" variant="display-strong-xs">
            {home.underline}
          </Heading>
          <Button
            id="about"
            data-border="rounded"
            href={about.path}
            variant="secondary"
            size="m"
            arrowIcon
          >
            <Flex gap="8" vertical="center">
              {about.avatar.display && (
                <Avatar
                  style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                  src={person.avatar}
                  size="m"
                />
              )}
              {about.title}
            </Flex>
          </Button>
        </Column>
      </Column>
      <Projects range={[2]} />
      <Flex
        background="neutral-alpha-weak"
        padding="24"
        radius="l"
        gap="16"
        direction="column"
        horizontal="center"
      >
        <div className="relative w-full aspect-video rounded-md overflow-hidden mt-24">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/N4lRCsGrhfQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="absolute inset-0 z-10" />
          <Heading align="center" wrap="balance" onBackground="neutral-weak" variant="body-strong-xl">
            Atelier
          </Heading>
        </div>
        <Text onBackground="neutral-weak" variant="body-default-m">
          Atelier de Mathias Pérez - Auvers-sur-Oise, 2025
        </Text>
      </Flex>
      <Projects range={[1, 1]} />
      <Flex
        background="neutral-alpha-weak"
        padding="24"
        radius="l"
        gap="16"
        direction="column"
        horizontal="center"
      >
        <Text onBackground="neutral-weak" variant="body-default-l">
          Bernard Noël et Mathias Pérez, mercredi 8 juin 2016
        </Text>
        <Image
          src="/images/gallery/Pataut_Noël.JPG"
          alt="Pataut"
          width={1600}
          height={700}
        />
      </Flex>
      <Flex
        background="neutral-alpha-weak"
        padding="24"
        radius="l"
        gap="16"
        direction="column"
        horizontal="center"
      >
        <div className="relative w-full aspect-video rounded-md overflow-hidden mt-24">
          <video width="400" controls>
            <source src="/images/projects/project-01/video-01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 z-10" />
          <Heading align="center" wrap="balance" onBackground="neutral-weak" variant="body-strong-xl">
            Bernard Noël.
          </Heading>
        </div>
        <Text onBackground="neutral-weak" variant="body-default-m">
          Entretien de Mathias Pérez avec Marc Pataut et Bernard Noël
        </Text>
        <Button
          href="/files/Entretien-bn.pdf"
          variant="secondary"
          size="m"
          data-border="rounded"
        >
          Voir L'entretien en PDF
        </Button>
      </Flex>
      <Flex
        background="brand-alpha-weak"
        padding="24"
        radius="l"
        gap="16"
        vertical="center"
        direction="column"
        horizontal="center"

      >
        <Heading variant="display-strong-s">
          Découvrez la monographie
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-m">
          Une analyse détaillée et illustrée de mon parcours, de mes expériences et de mes réflexions – à télécharger en format PDF.
        </Text>
        <Button
          href="/files/livre-perez.pdf"
          variant="primary"
          size="m"
          data-border="rounded"
        >
          Voir la monographie
        </Button>
      </Flex>
      <Flex
        background="neutral-alpha-weak"
        padding="24"
        radius="l"
        gap="16"
        direction="column"
        horizontal="center"
      >
        <Heading variant="display-strong-s">
          Fusées 22 — Carte Blanche, 2012
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-m">
          Revue littéraire et poétique d’avant-garde. Disponible en PDF intégral avec couverture.
        </Text>
        <Button
          href="/fusees/fusees-22"
          variant="secondary"
          size="m"
          data-border="rounded"
        >
          Voir le sommaire
        </Button>
      </Flex>

      {/* {newsletter.display && <Mailchimp newsletter={newsletter} />} */}
    </Column>
  );
}
