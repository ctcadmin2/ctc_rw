import {
  creditNotes,
  creditNote,
  createCreditNote,
  updateCreditNote,
  deleteCreditNote,
} from './creditNotes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('creditNotes', () => {
  scenario('returns all creditNotes', async (scenario) => {
    const result = await creditNotes()

    expect(result.length).toEqual(Object.keys(scenario.creditNote).length)
  })

  scenario('returns a single creditNote', async (scenario) => {
    const result = await creditNote({ id: scenario.creditNote.one.id })

    expect(result).toEqual(scenario.creditNote.one)
  })

  scenario('creates a creditNote', async (scenario) => {
    const result = await createCreditNote({
      input: { number: 'String', vehicleId: scenario.creditNote.two.vehicleId },
    })

    expect(result.number).toEqual('String')
    expect(result.vehicleId).toEqual(scenario.creditNote.two.vehicleId)
  })

  scenario('updates a creditNote', async (scenario) => {
    const original = await creditNote({ id: scenario.creditNote.one.id })
    const result = await updateCreditNote({
      id: original.id,
      input: { number: 'String2' },
    })

    expect(result.number).toEqual('String2')
  })

  scenario('deletes a creditNote', async (scenario) => {
    const original = await deleteCreditNote({ id: scenario.creditNote.one.id })
    const result = await creditNote({ id: original.id })

    expect(result).toEqual(null)
  })
})
