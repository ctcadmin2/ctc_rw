import { db } from 'src/lib/db'

export const creditNotes = () => {
  return db.creditNote.findMany()
}

export const creditNote = ({ id }) => {
  return db.creditNote.findUnique({
    where: { id },
  })
}

export const createCreditNote = ({ input }) => {
  return db.creditNote.create({
    data: input,
  })
}

export const updateCreditNote = ({ id, input }) => {
  return db.creditNote.update({
    data: input,
    where: { id },
  })
}

export const deleteCreditNote = ({ id }) => {
  return db.creditNote.delete({
    where: { id },
  })
}

export const CreditNote = {
  vehicle: (_obj, { root }) =>
    db.creditNote.findUnique({ where: { id: root.id } }).vehicle(),
}

export const creditNotesPage = ({ page = 1 }) => {
  const offset = (page - 1) * parseInt(process.env.POSTS_PER_PAGE)

  return {
    creditNotes: db.creditNote.findMany({
      take: parseInt(process.env.POSTS_PER_PAGE),
      skip: offset,
      orderBy: { number: 'asc' },
    }),
    total: db.creditNote.count(),
  }
}
