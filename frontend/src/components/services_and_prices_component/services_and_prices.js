import style from "./ServicesAndPrices.module.css"
import ExpansionPanelComponent from "@/components/expansion_panel_component/expansion_panel";

export default function ServicesAndPricesComponent() {
    return (
        <div className={style.container}>
            <h2>Dienste und Preise</h2>
            <div className={style.expansionPanel}>
                <ExpansionPanelComponent/>
            </div>
        </div>
    );
}