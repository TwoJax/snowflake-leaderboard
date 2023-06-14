<template>
  <main class="h-full p-4 bg-no-repeat bg-top bg-snowflake-blue">
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
import LeaderboardEntry from '@/components/LeaderboardEntry.vue';
import { useTimeEntriesStore } from '@/stores/time_entries';

const store = useTimeEntriesStore();

function onEnter(el) {
  console.log('onEnter', el);
  el.scrollIntoView({ behavior: 'instant', block: 'center' });
}
</script>

<style>
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
