const database = {
    orderBuilder: {},
    carColor: [
        {id: 1, color: "Silver", price: 5000},
        {id: 2, color: "Midnight Blue", price: 4000},
        {id: 3, color: "Firebrick Red", price: 6000},
        {id: 4, color: "Spring Green", price: 3500}
    ],
    interior: [
        {id: 1, seatType: "Fabric", color: "Beige", price: 1000},
        {id: 2, seatType: "Fabric", color: "Charcoal", price: 1250},
        {id: 3, seatType: "Leather", color: "White", price: 2500},
        {id: 4, seatType: "Leather", color: "Black", price: 3000}
    ],
    technology: [
        {id: 1, package: "Basic", description: "basic sound system", price: 500},
        {id: 2, package: "Navigation", description: "inculdes integrated navigation controls", price: 1000},
        {id: 3, package: "Visibility", description: "includes side and rear cameras", price: 1250},
        {id: 4, package: "Ultra", description: "includes navigation and visibility packages", price: 2000}
    ],
    wheels: [
        {id: 1, size: 17, type: "Radial", color: "Silver", price: 750},
        {id: 2, size: 17, type: "Radial", color: "Black", price: 1000},
        {id: 3, size: 18, type: "Spoke", color: "Silver", price: 1500},
        {id: 4, size: 18, type: "Spoke", color: "Black", price: 2000}
    ],
    vehicleTypes: [
        { id: 1, type: "Car"},
        { id: 2, type: "SUV"},
        { id: 3, type: "Truck"}
    ],
    customOrders: [
        // {
        //     id: 1,
        //     carColorId: 2,
        //     interiorId: 1,
        //     technologyId: 3,
        //     wheelsId: 1,
        //     timestamp:1614659931693
        // },
    ]
}

export const getCustomOrders = () => {
    return [...database.customOrders]
}

export const getCarColors = () => {
    return [...database.carColor]
}

export const getInteriors = () => {
    return [...database.interior]
}

export const getTechnologies = () => {
    return [...database.technology]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const getVehicleTypes = () => {
    return [...database.vehicleTypes]
}

export const setVehicleType = (id) => {
    database.orderBuilder.vehicleTypeId = id
}

export const setCarColor = (id) => {
    database.orderBuilder.carColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const totalCustomOrders = database.customOrders.length

    // database.orders.length > 0 ?
    
    
    if (totalCustomOrders < 1) {
        newOrder.id = 1
    } else {newOrder.id = [...database.customOrders].pop().id + 1}

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}