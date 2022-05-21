export const schema = gql`
  type Setting {
    id: Int!
    name: String!
    value: [String]!
    type: String!
    multi: Boolean!
  }

  type Query {
    settings(type: String!): [Setting!]! @requireAuth
    setting(name: String!): Setting! @requireAuth
  }

  type Mutation {
    updateSettings(id: Int!, input: UpdateSettingInput!): Setting! @requireAuth
  }

  input UpdateSettingInput {
    value: [String]!
  }
`
