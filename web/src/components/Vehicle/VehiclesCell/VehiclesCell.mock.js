import { faker } from "@faker-js/faker";

// Define your own mock data here:
export const standard = () => {
  const vehicles = []

  for (const i in [...Array(100).keys()]) {
    vehicles.push({
      id: i,
      registration: faker.vehicle.vrm(),
      vin: faker.vehicle.vin(),
      category: faker.vehicle.type(),
      active: faker.datatype.boolean(),
    })
  }
  return {vehicles}
}
