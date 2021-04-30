import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    for (const interior of interiors) {
        html += `<li class="interior__list__item choice__list__item">
        <input  type="radio" name="interior" value="${interior.id}"/>${interior.color} ${interior.seatType}</li>`
    }

    html += "</ul>"
    return html
}