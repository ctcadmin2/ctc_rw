import { db } from 'src/lib/db'

// Queries
export const vehicles = () => {
  return db.vehicle.findMany()
}

export const vehicle = ({ id }) => {
  return db.vehicle.findUnique({
    where: { id },
  })
}

export const vehiclesPage = ({ page = 1 }) => {
  const offset = (page - 1) * 5

  return {
    vehicles: db.vehicle.findMany({
      take: 5,
      skip: offset,
      orderBy: [{ active: 'desc' }, { registration: 'desc' }],
    }),
    count: db.vehicle.count(),
  }
}

// Mutations
export const createVehicle = ({ input }) => {
  return db.vehicle.create({
    data: input,
  })
}

export const updateVehicle = ({ id, input }) => {
  return db.vehicle.update({
    data: {...input},
    where: { id },
  })
}

export const deleteVehicle = ({ id }) => {
  return db.vehicle.delete({
    where: { id },
  })
}
