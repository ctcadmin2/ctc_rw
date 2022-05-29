export const schema = gql`
  type CreditNote {
    id: Int!
    number: String!
    amount: Float!
    currency: String!
    paid: Boolean
    start: String
    end: String
    week: Int
    notes: String
    createdAt: DateTime
    vehicleId: Int!
    vehicle: Vehicle!
  }

  type Query {
    creditNotes: [CreditNote!]! @requireAuth
    creditNotesPage(page: Int): CreditNotesPage @requireAuth
    creditNote(id: Int): CreditNote @requireAuth
  }

  type Mutation {
    createCreditNote(input: CreateCreditNoteInput!): CreditNote! @requireAuth
    updateCreditNote(id: Int!, input: UpdateCreditNoteInput!): CreditNote!
      @requireAuth
    deleteCreditNote(id: Int!): CreditNote! @requireAuth
  }

  type CreditNotesPage {
    creditNotes: [CreditNote!]! @requireAuth
    total: Int! @requireAuth
  }

  input CreateCreditNoteInput {
    number: String!
    amount: Float!
    currency: String!
    paid: Boolean
    start: String
    end: String
    week: Int
    notes: String
    createdAt: DateTime
    vehicleId: Int!
  }

  input UpdateCreditNoteInput {
    number: String
    amount: Float
    currency: String
    paid: Boolean
    start: String
    end: String
    week: Int
    notes: String
    createdAt: DateTime
    vehicleId: Int
  }
`
