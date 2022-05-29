import { db } from 'src/lib/db'

// Queries
export const vehicles = () => {
  return db.vehicle.findMany()
}

export const registrationList = () => {
  return db.vehicle.findMany({
    select: {
      id: true,
      registration: true,
    },
    where: {
      category: 'camion',
      active: true,
    },
  })
}

export const vehicle = ({ id }) => {
  return db.vehicle.findUnique({
    where: { id },
  })
}

export const vehiclesPage = ({ page = 1 }) => {
  const offset = (page - 1) * parseInt(process.env.POSTS_PER_PAGE)

  return {
    vehicles: db.vehicle.findMany({
      take: parseInt(process.env.POSTS_PER_PAGE),
      skip: offset,
      orderBy: [{ active: 'desc' }, { registration: 'desc' }],
    }),
    total: db.vehicle.count(),
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
    data: { ...input },
    where: { id },
  })
}

export const deleteVehicle = ({ id }) => {
  return db.vehicle.delete({
    where: { id },
  })
}
