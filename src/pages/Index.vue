<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style="{
      backgroundImage:
      `url('${GRIDSOME_API_URL + index.cover.url}')`
    }">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ index.title }}</h1>
              <span class="subheading">{{ index.subtitle }}</span>
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
            v-for="(edge, index) in $page.post.edges" :key="edge.node.id"
          >
            <!-- Divider-->
            <hr class="my-4" v-if="index > 0"/>
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">{{ edge.node.title }}</h2>
              <!--
              <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3>
              -->
            </g-link>
            <p class="post-meta">
            Posted by
            <a href="#!">{{ edge.node.author.username }}</a>
            on {{ edge.node.created_at }}
            </p>
            <p>
              <g-link class="btn btn-sm"
                v-for="tag in edge.node.tags"
                :key="tag.id"
                :to="'/tag/' + tag.id"
              >
                {{ tag.title }}
              </g-link>
            </p>
          </div>
          <!-- Pager
          <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
          -->
          <pager class="pager" :info="$page.post.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  post: allStrapiPost (perPage: 4, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        created_at
        author {
          id
          username
        }
        tags {
          id
          title
        }
      }
    }
  }

  index: allStrapiIndex {
    edges {
      node {
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  name: 'IndexPage',
  components: { Pager },
  computed: {
    index () {
      return this.$page.index.edges[0].node
    }
  }
}
</script>

<style scoped>
.pager {
  margin: 20px 0;
  text-align: center;
}
.pager a {
  padding: 5px;
  display: inline-block;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  line-height: 20px;
  vertical-align: middle;
}
.pager a.active {
  color: #fff;
  background-color: #007189;
  border-color: #006a81;
}
</style>
