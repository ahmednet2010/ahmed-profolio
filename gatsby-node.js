exports.createPages = async ({ actions }) => {
    actions.createSlice({
      id: `aside`,
      component: require.resolve("./src/layout/Aside.tsx"),
    })
    actions.createSlice({
        id: `Navbar`,
        component: require.resolve("./src/layout/Navbar.tsx"),
      })
  }