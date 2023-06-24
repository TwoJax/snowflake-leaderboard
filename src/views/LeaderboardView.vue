<template>
  <main ref="main" class="h-full p-4 bg-no-repeat bg-top bg-snowflake-blue preload">
    <table class="table-auto w-full border-separate border-spacing-y-2.5">
      <thead>
        <tr>
          <th class="border-b border-sky-400 py-2 font-light text-left text-white uppercase pl-32">Name</th>
          <th class="border-b border-sky-400 py-2 font-light text-right text-white pr-16 uppercase">Time</th>
        </tr>
      </thead>
    </table>

    <transition-group
      name="leaderboard"
      tag="ol"
      class="space-y-2"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
    >
      <leaderboard-entry
        v-for="(entry, index) in store.allTimeEntries"
        :key="entry.id"
        :rank="index + 1"
        :time-entry="entry"
      />
    </transition-group>
  </main>

</template>

<script setup>
import { onMounted, ref } from 'vue';
// import { gsap } from 'gsap';

import LeaderboardEntry from '@/components/LeaderboardEntry.vue';
import { useTimeEntriesStore } from '@/stores/time_entries';

const main = ref(null);
const store = useTimeEntriesStore();

onMounted(() => {
  main.value.classList.remove('preload');
});

/* eslint-disable no-param-reassign */
function onBeforeEnter() {
  // el.classList.add('z-100');
  // el.style.transform = 'translateY(100vh)';
}
/* eslint-enable no-param-reassign */

function onEnter() {
  // gsap.to(el, {
  //     duration: 3,
  //   ease: 'power1.in',
  // onComplete: done,
  // y: 0,
  // });
}
</script>

<style>
.preload * { transition: none !important;}

.leaderboard-move,
.leaderboard-enter-active,
.leaderboard-leave-active {
  transition: all 0.5s ease;
}

.leaderboard-enter-from {
  opacity: 0;
  top: 100%;
}
</style>
