<template>
  <div class="markdown">
    <div v-html="getMark()" v-highlight></div>
  </div>
</template>

<script>
import Vue from 'vue'
import marked from 'marked'
import Highlight from 'vue-markdown-highlight'
import 'highlight.js/styles/docco.css'
Vue.use(Highlight)
export default {
  name: 'markdown',
  data () {
    return {
    }
  },
  methods: {
    getMark: function () {
      return marked(this.$store.state.jsonData.source)
    }
  },
  computed: {
  }
}
</script>

<style>
.markdown {
  text-align: left;
}
</style>
