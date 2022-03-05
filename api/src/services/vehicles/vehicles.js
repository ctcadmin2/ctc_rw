import { db } from 'src/lib/db'

export const vehicles = () => {
  return db.vehicle.findMany()
}

export const vehicle = ({ id }) => {
  return db.vehicle.findUnique({
    where: { id },
  })
}

export const createVehicle = ({ input }) => {
  return db.vehicle.create({
    data: input,
  })
}

export const updateVehicle = ({ id, input }) => {
  return db.vehicle.update({
    data: input,
    where: { id },
  })
}

export const deleteVehicle = ({ id }) => {
  return db.vehicle.delete({
    where: { id },
  })
}
