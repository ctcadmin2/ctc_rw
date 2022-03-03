import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data = [
      {
        id: 1,
        name: 'activities',
        value: ['to be removed'],
        type: 'main',
        multi: true,
      },
      {
        id: 2,
        name: 'currencies',
        value: ['to be removed'],
        type: 'main',
        multi: true,
      },
      {
        id: 4,
        name: 'paidBy',
        value: ['to be removed'],
        type: 'main',
        multi: true,
      },
      {
        id: 6,
        name: 'vatRate',
        value: ['to be removed'],
        type: 'main',
        multi: true,
      },
      {
        id: 7,
        name: 'vehCat',
        value: ['to be removed'],
        type: 'main',
        multi: true,
      },
      {
        id: 3,
        name: 'diurnaBaza',
        value: ['to be removed'],
        type: 'main',
        multi: false,
      },
      {
        id: 5,
        name: 'salarBaza',
        value: ['to be removed'],
        type: 'main',
        multi: false,
      },

      {
        id: 8,
        name: 'name',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 9,
        name: 'registration',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 10,
        name: 'vat',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 11,
        name: 'address',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 12,
        name: 'accRon',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 13,
        name: 'accEur',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 14,
        name: 'bank',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 15,
        name: 'capital',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 16,
        name: 'phone',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 17,
        name: 'email',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
      {
        id: 18,
        name: 'contact',
        value: ['to be removed'],
        type: 'company',
        multi: false,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data) => {
        const record = await db.setting.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
