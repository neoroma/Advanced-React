const mutations = {
  createItem: async (parent, { data }, { db }, info) => {
    const item = await db.mutation.createItem({
      data
    }, info)

    return item

  },
  deleteItem: async (parent, { id }, { db }, info) => {
    return db.mutation.deleteItem({
      where: { id }
    }, info)
  },
  updateItem: async (parent, { id, data }, { db }, info) => {
    const { id: dupId, ...updates } = data

    return db.mutation.updateItem({
      where: { id },
      data: updates
    }, info)
  }
}

module.exports = mutations
