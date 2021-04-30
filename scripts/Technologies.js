import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    for (const technology of technologies) {
        html += `<li class="technology__list__item choice__list__item">
        <input type="radio" name="technology" value="${technology.id}"/>${technology.package}</li>`
    }

    html += "</ul>"
    return html
}