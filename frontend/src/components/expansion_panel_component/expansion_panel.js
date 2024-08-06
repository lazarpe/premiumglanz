import React from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import CardComponent from "@/components/card_component/card";
import politur from "../../assets/img/politur.png";
import nano from "../../assets/img/nanoversiegelung_und_fensterscheiben.jpg";
import cabrio from "../../assets/img/cabrio.jpg";
import felgen from "../../assets/img/felgen.jpg";
import innenraumExpress from "../../assets/img/innenraum_express.jpg";
import innenraumPremium from "../../assets/img/innenraum_premium.jpg";

export default function ExpansionPanelComponent() {
  return (
    <Accordion variant="splitted" style={{ marginBottom: 30 }}>
      <AccordionItem key="1" aria-label="Exterieur" title="&#128734; Exterieur">
        <Link href={"/politur"}>
          <CardComponent
            imagePath={politur}
            title={"Politur und Lackversiegelung"}
            price={"199"}
          />
        </Link>
        <Link href={"/nano"}>
          <CardComponent
            imagePath={nano}
            title={"Nanoversiegelung Fenster und Scheiben"}
            price={"119"}
          />
        </Link>
        <Link href="/impraegnierung">
          <CardComponent
            imagePath={cabrio}
            title={"Imprägnierung und Reinigung Cabrio-dach"}
            price={"129"}
          />
        </Link>
        <Link href="/felgenreinigung">
          <CardComponent
            imagePath={felgen}
            title={"Felgenreinigung"}
            price={"39"}
          />
        </Link>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Interieur" title="&#128186; Interieur">
        <Link href="/innenreinigung-express">
          <CardComponent
            imagePath={innenraumExpress}
            title={"Innenreinigung Express"}
            price={"59"}
          />
        </Link>
        <Link href="/innenreinigung-premium">
          <CardComponent
            imagePath={innenraumPremium}
            title={"Innenreinigung Premium"}
            price={"99"}
          />
        </Link>
      </AccordionItem>
    </Accordion>
  );
}
