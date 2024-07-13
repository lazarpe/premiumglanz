import React from "react";
import {Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DropdownComponent() {
    return (
        <Dropdown variant={"light"}>
            <DropdownTrigger>
                <Button
                    variant="light"
                    endContent={<KeyboardArrowDownIcon/>}
                >
                    <p style={{fontSize: "1rem"}}>
                        Dienste und Preise
                    </p>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem>
                    <Link href={"/politur"} color={"foreground"}>
                        Politur und Lackversiegelung
                    </Link>
                </DropdownItem>
                <DropdownItem>Nanoversiegelung Fenster und Scheiben</DropdownItem>
                <DropdownItem>Imprägnierung und Reinigung Cabriodach</DropdownItem>
                <DropdownItem>Felgenreinigung</DropdownItem>
                <DropdownItem>Innenreinigung Express</DropdownItem>
                <DropdownItem>Innenreinigung Premium</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}