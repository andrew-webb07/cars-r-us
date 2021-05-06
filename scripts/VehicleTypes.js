import { getVehicleTypes, setVehicleType } from "./database.js"

const vehicleTypes = getVehicleTypes()

document.addEventListener(
    "change", (changeEvent) => {
        if(changeEvent.target.name === "vehicleType") {
            setVehicleType(parseInt(changeEvent.target.value))
        }
    }
)

export const VehicleTypes = () => {
    let html = "<ul>"

    for (const vehicleType of vehicleTypes) {
        html += `<li class="vehicleType__list__item choice__list__item">
        <input type="radio" name="vehicleType" value=${vehicleType.id}/>${vehicleType.type}
    </li>`
    }

    html += "</ul>"
    return html
}