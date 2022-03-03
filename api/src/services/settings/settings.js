import { db } from 'src/lib/db'

export const settings = ({ type }) => {
  return db.setting.findMany({ where: { type }, orderBy: { id: 'asc' } })
}

// export const setting = ({ name }) => {
//   return db.setting.findUnique({ where: { name } })
// }

export const updateSettings = ({ id, input }) => {
  return db.setting.update({
    data: input,
    where: { id },
  })
}
