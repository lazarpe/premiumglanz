import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function ExpansionPanelComponent() {
    return (
        <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Ac" title="Exterieur">
                Hier kommen die cards
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 3" title="Interieur" style={{marginTop: 5}}>
                Hoi test test
            </AccordionItem>
        </Accordion>
    );
}
