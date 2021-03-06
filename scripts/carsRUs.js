import {Colors} from "./Colors.js"
import {Interiors} from "./Interiors.js"
import {Technologies} from "./Technologies.js"
import {Wheels} from "./Wheels.js"
import {addCustomOrder} from "./database.js"
import {Orders} from "./Orders.js"
import { VehicleTypes } from "./VehicleTypes.js"



document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1 class="container__title">Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__vehicleTypes options">
            <h2>Vehicle Type</h2>
            ${VehicleTypes()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

