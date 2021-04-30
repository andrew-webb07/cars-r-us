import {CarsRUs} from "./carsRUs.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of the data has changed. Regenerating HTML...")
    renderAllHTML()
})