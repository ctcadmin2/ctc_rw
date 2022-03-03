export const schema = gql`
  type Setting {
    id: Int!
    name: String!
    value: [String]!
    type: String!
    multi: Boolean!
  }

  type Query {
    settings(type: String!): [Setting!]! @skipAuth
  }

  type Mutation {
    updateSettings(id: Int!, input: UpdateSettingInput!): Setting! @skipAuth
  }

  input UpdateSettingInput {
    name: String
    value: [String]!
    type: String
    multi: Boolean
  }
`
