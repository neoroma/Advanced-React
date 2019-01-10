const mutations = {
  createItem: async (parent, { data }, { db }, info) => {
    const item = await db.mutation.createItem({
      data
    }, info)

    return item

  }
}

module.exports = mutations
