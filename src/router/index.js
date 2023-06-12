import { createRouter, createWebHistory } from 'vue-router';
import EntryFormView from '../views/EntryFormView.vue';
import LeaderboardView from '../views/LeaderboardView.vue';

const routes = [
  {
    path: '/',
    name: 'leaderboard',
    component: LeaderboardView,
  },
  {
    path: '/time_entries/new',
    name: 'new-time-entry',
    component: EntryFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
