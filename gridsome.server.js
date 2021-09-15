// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // 预加载数据
    /*
    const collection = addCollection('Post')
    const { data } = await axios.get('http://localhost:3001/posts')
    data.forEach(item => {
      const { id, title, body } = item
      collection.addNode({ id, title, body })
    })
    */
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
