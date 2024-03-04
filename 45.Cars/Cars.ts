

function createCar(manufacturer: string, model: string, ...
properties: [string, any][]): any {
    const car: any = {
        manufacturer,
        model,
    };

    for (const [key, value] of properties) {
        car[key] = value;
    }

    return car;
}

// Example usage:
const myCar: string = createCar("Toyota", "Corolla", ["color", "red"],
["optional Feature", "sunroof"], ["speed", "280 KM/hour"]);


console.log(myCar);