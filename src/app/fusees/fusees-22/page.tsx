import React from "react";
import { Column, Heading, Text, Button, Flex } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
    return Meta.generate({
        title: "Fusées 22 | Editions Carte Blanche, 2012",
        description: "Téléchargement et sommaire de la revue Fusées 22.",
        baseURL: baseURL,
        path: "/fusees-22",
        image: `${baseURL}/og?title=${encodeURIComponent("Fusées 22")}`,
    });
}
export default function Fusees22Page() {
    return (
        <Column maxWidth="m" gap="xl" paddingY="40">
            <Heading variant="display-strong-m">Fusées 22 | Editions Carte Blanche, 2012</Heading>

            <Flex gap="16" wrap>
                <Button
                    variant="primary"
                    href="/files/22-fusees.pdf"
                    data-border="rounded"
                >
                    Télécharger Fusées 22 en PDF
                </Button>
                <Button
                    variant="secondary"
                    href="/files/22-fusees-couv.pdf"
                    data-border="rounded"
                >
                    Télécharger la couverture en PDF
                </Button>
            </Flex>

            <Column gap="l" paddingTop="32">
                <Heading as="h2" variant="display-strong-xs">PRÉFACE</Heading>
                <Text>Claude Minière - LE RESTE EST L’ALLITÉRATURE</Text>
                <Text>PATRICK BEURARD-VALDOYE</Text>
                <Text>Vincent Courtois - (entretien) POLITIQUE DES ARTS</Text>

                <Heading as="h2" variant="display-strong-xs" paddingTop="24">POÉTIQUES</Heading>
                <Text>Patrick Beurard-Valdoye - LA TAUPE AU LOGIS</Text>
                <Text>Patrick Beurard-Valdoye - GHÉRASIM APRÈS GHERASIM</Text>
                <Text>Julien Ségura - JE RESTE FASCINÉ D’IMAGINER...</Text>

                <Heading as="h2" variant="display-strong-xs" paddingTop="24">MATHIAS PÉREZ</Heading>
                <Text>Claude Minière - NOTES SUR L’HYPOTHÈSE DE PÉREZ</Text>
                <Text>Mathias Pérez - IL EST TOUJOURS QUESTION DE DESIGN</Text>
                <Text>Mathias Pérez avec Bernard Heidsieck - C’EST</Text>
                <Text>Emmanuel Tugny - VINGT ANS APRÈS, L’OEUVRE EN SOI</Text>

                <Heading as="h2" variant="display-strong-xs" paddingTop="24">FRANÇOIS DI DIO</Heading>
                <Text>Bernard Heidsieck - LE SOLEIL NOIR : HOMMAGE</Text>
                <Text>Ghérasim Luca - HÉROS-LIMITE</Text>
                <Text>François Di Dio - ENTRETIEN AVEC NATALIE MEI</Text>

                <Heading as="h2" variant="display-strong-xs" paddingTop="24">ABESH BIVORE MITRA</Heading>
                <Text>Abesh Bivore Mitra - 12 PEINTURES EN COULEUR</Text>
                <Text>Emmanuel Tugny - LE RADIEUX DÉTRAQUEUR</Text>
                <Text>Abesh Bivore Mitra - L’ALLÉGORIE DU PAYSAGE</Text>

                <Heading as="h2" variant="display-strong-xs" paddingTop="24">CHRISTIAN GABRIELLE GUEZ RICORD</Heading>
                <Text>Ana-Maria Gîrleanu-Guichard - CHRISTIAN GABRIELLE GUEZ RICORD</Text>
                <Text>Christian Gabrielle Guez Ricord - TEXTES INÉDITS ET CONFIDENTIELS</Text>
                <Text>Christian Gabrielle Guez Ricord - FRAGMENT D’UNE LETTRE À MIREILLE MAMMINI</Text>
                <Text>Christian Gabrielle Guez Ricord - LETTRES À HUBERT BIRRINGER</Text>
                <Text>Bernard Noël - CORRESPONDANCE CROISÉE AVEC C. G. GUEZ RICORD</Text>
                <Text>Bernard Noël - STÈLE POUR SAMAËL</Text>
                <Text>Dominique Sorrente - IL DIT ENCORE...</Text>
                <Text>Antoine Graziani - L’l’</Text>

                <Heading as="h2" variant="display-strong-xs" paddingTop="24">TRAVAUX EN COURS</Heading>
                <Text>Christophe Manon - L’ÉCLAT DU SENSIBLE</Text>
                <Text>Constance Chlore - MAINS BLANCHES</Text>
                <Text>Jean-Paul Fargier - DANEY</Text>
            </Column>
        </Column>
    );
}
