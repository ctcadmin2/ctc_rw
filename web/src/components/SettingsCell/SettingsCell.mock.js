// Define your own mock data here:
export const standard = () => ({
  settings: [{ id: 42 }, { id: 43 }, { id: 44 }],
})

mockGraphQLMutation('updateSettings', ({ id, input }, { _ctx }) => {
  return {
    data: {
      updateSettings: {
        id: id,
        name: 'activities',
        value: input.value,
        type: 'main',
        multi: true,
      },
    },
  }
})
