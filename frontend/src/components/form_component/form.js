import React, {useState} from "react";
import {Input, Button} from "@nextui-org/react";
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import styles from "./Form.module.css";

export default function FormComponent() {
    const [phone, setPhone] = useState('');
    return (
        <div className="flex w-full flex-wrap gap-4">
            <Input type="text" placeholder="Peter" label="Vorname" labelPlacement="outside"/>
            <Input type="text" placeholder="Griffin" label="Nachname" labelPlacement="outside"/>
            <Input type="email" placeholder="peter@griffin.com" label="Email" labelPlacement="outside"/>
            {/*
            <div>
                <PhoneInput
                    style={{width: 100 + "%"}}
                    // inputStyle={{width: 100 + "%", position: "absolute"}}
                    defaultCountry="ch"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                />
            </div>
            */}
            <Input type="number" defaultValue="+41" placeholder="+41 79 000 00 00" label="Telefonnummer"
                   labelPlacement="outside"/>
            <Button fullWidth={true} color={"primary"}>Senden</Button>
        </div>
    );
}