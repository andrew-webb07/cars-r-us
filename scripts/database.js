const database = {
    carColor: [
        {id: 1, color: "Silver"},
        {id: 2, color: "Midnight Blue"},
        {id: 3, color: "Firebrick Red"},
        {id: 4, color: "Spring Green"}
    ],
    interior: [
        {id: 1, seatType: "Fabric", color: "Beige"},
        {id: 2, seatType: "Fabric", color: "Charcoal"},
        {id: 3, seatType: "Leather", color: "White"},
        {id: 4, seatType: "Leather", color: "Black"}
    ],
    technology: [
        {id: 1, package: "Basic", description: "basic sound system"},
        {id: 2, package: "Navigation", description: "inculdes integrated navigation controls"},
        {id: 3, package: "Visibility", description: "includes side and rear cameras"},
        {id: 4, package: "Ultra", description: "includes navigation and visibility packages"}
    ],
    wheels: [
        {id: 1, wheelSize: 17, wheelType: "Radial", color: "Silver"},
        {id: 2, wheelSize: 17, wheelType: "Radial", color: "Black"},
        {id: 3, wheelSize: 18, wheelType: "Spoke", color: "Silver"},
        {id: 4, wheelSize: 18, wheelType: "Spoke", color: "Black"}
    ]
}

export const getCarColor = () => {
    return [...database.carColor]
}

export const getInterior = () => {
    return [...database.interior]
}

export const getTechnology = () => {
    return [...database.technology]
}

export const getWheels = () => {
    return [...database.wheels]
}