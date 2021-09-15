<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">#{{ $page.tag.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview"
            v-for="(post, index) in $page.tag.posts" :key="post.id"
          >
            <!-- Divider-->
            <hr class="my-4" v-if="index > 0"/>
            <g-link :to="'/post/' + post.id">
              <h2 class="post-title">{{ post.title }}</h2>
            </g-link>
            <p class="post-meta">
            Posted
            <!--by <a href="#!">{{ edge.node.author.username }}</a>-->
            on {{ post.created_at }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag: strapiTag (id: $id) {
    id
    title
    posts {
      id
      title
      created_at
    }
  }
}
</page-query>

<script>
export default {
  name: 'TagPage',
  metaInfo () {
    return {
      title: this.$page.tag.title
    }
  }
}
</script>

<style scoped>
</style>
