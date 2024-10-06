import Vue from 'vue';
import Router from 'vue-router';
import MarkdownViewer from '../components/MarkdownViewer.vue';
import gettingStarted from '../../docs/getting-started.md'; // Импортируйте ваш Markdown файл

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GettingStarted',
      component: {
        render(h) {
          return h(MarkdownViewer, {
            props: {
              markdown: gettingStarted
            }
          });
        }
      }
    },
    // Вы можете добавить другие маршруты для других файлов документации
  ]
});
