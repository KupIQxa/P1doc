<template>
  <div v-html="compiledMarkdown" class="markdown"></div>
</template>

<script>
import { marked } from 'marked'; // Импортируйте правильно


export default {
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown);
    }
  }
};
</script>

<style scoped>
.markdown {
  /* Здесь можно добавить стили для улучшения внешнего вида Markdown */
}
</style>
