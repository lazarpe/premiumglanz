import React from "react";
import {
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { color } from "framer-motion";

export default function DropdownComponent() {
  return (
    <Dropdown variant={"light"}>
      <DropdownTrigger>
        <Button variant="light" endContent={<KeyboardArrowDownIcon />}>
          <p style={{ fontSize: "1rem" }}>Dienste und Preise</p>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>
          <Link href={"/politur"} color={"foreground"}>
            Politur und Lackversiegelung
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/nano"} color={"foreground"}>
            Nanoversiegelung Fenster und Scheiben
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/impraegnierung"} color={"foreground"}>
            Imprägnierung und Reinigung Cabriodach
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/felgenreinigung"} color={"foreground"}>
            Felgenreinigung
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/innenreinigung-express"} color={"foreground"}>
            Innenreinigung Express
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/innenreinigung-premium"} color={"foreground"}>
            Innenreinigung Premium
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
