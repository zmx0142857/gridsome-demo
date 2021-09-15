// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Clean Blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ['post', 'tag'],
        singleTypes: ['index'],
        //loginData: {
        //  identifier: '',
        //  password: ''
        //}
      }
    }
  ],
  templates: {
    StrapiPost: [ // 固定名称
      {
        path: '/post/:id',
        component: 'src/templates/Post.vue'
      }
    ],
    StrapiTag: [ // 固定名称
      {
        path: '/tag/:id',
        component: 'src/templates/Tag.vue'
      }
    ]
  }
}
