export const schema = gql`
  type Vehicle {
    id: Int!
    registration: String!
    vin: String!
    category: String
    active: Boolean!
  }

  type Query {
    vehicles: [Vehicle!]! @requireAuth
    vehicle(id: Int!): Vehicle @requireAuth
  }

  input CreateVehicleInput {
    registration: String!
    vin: String!
    category: String
    active: Boolean!
  }

  input UpdateVehicleInput {
    registration: String
    vin: String
    category: String
    active: Boolean
  }

  type Mutation {
    createVehicle(input: CreateVehicleInput!): Vehicle! @requireAuth
    updateVehicle(id: Int!, input: UpdateVehicleInput!): Vehicle! @requireAuth
    deleteVehicle(id: Int!): Vehicle! @requireAuth
  }
`
