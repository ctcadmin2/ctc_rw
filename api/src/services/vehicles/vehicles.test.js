import {
  vehicles,
  vehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from './vehicles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('vehicles', () => {
  scenario('returns all vehicles', async (scenario) => {
    const result = await vehicles()

    expect(result.length).toEqual(Object.keys(scenario.vehicle).length)
  })

  scenario('returns a single vehicle', async (scenario) => {
    const result = await vehicle({ id: scenario.vehicle.one.id })

    expect(result).toEqual(scenario.vehicle.one)
  })

  scenario('creates a vehicle', async () => {
    const result = await createVehicle({
      input: { registration: 'String', vin: 'String3403091' },
    })

    expect(result.registration).toEqual('String')
    expect(result.vin).toEqual('String3403091')
  })

  scenario('updates a vehicle', async (scenario) => {
    const original = await vehicle({ id: scenario.vehicle.one.id })
    const result = await updateVehicle({
      id: original.id,
      input: { registration: 'String2' },
    })

    expect(result.registration).toEqual('String2')
  })

  scenario('deletes a vehicle', async (scenario) => {
    const original = await deleteVehicle({ id: scenario.vehicle.one.id })
    const result = await vehicle({ id: original.id })

    expect(result).toEqual(null)
  })
})
