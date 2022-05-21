export const schema = gql`
  type Query {
    vehiclesPage(page: Int): VehiclesPage @requireAuth
    vehicles: [Vehicle!]! @requireAuth
    vehicle(id: Int!): Vehicle @requireAuth
  }

  type Mutation {
    createVehicle(input: CreateVehicleInput!): Vehicle! @requireAuth
    updateVehicle(id: Int!, input: UpdateVehicleInput!): Vehicle! @requireAuth
    deleteVehicle(id: Int!): Vehicle! @requireAuth
  }
  type Vehicle {
    id: Int!
    registration: String
    vin: String!
    category: String
    active: Boolean
  }

  type VehiclesPage {
    vehicles: [Vehicle!]! @requireAuth
    count: Int! @requireAuth
  }

  input CreateVehicleInput {
    registration: String
    vin: String!
    category: String
    active: Boolean
  }

  input UpdateVehicleInput {
    registration: String
    vin: String
    category: String
    active: Boolean
  }
`
