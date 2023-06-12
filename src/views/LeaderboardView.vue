<template>
  <main class="h-full p-4 bg-no-repeat bg-top bg-snowflake-blue bg-[url('images/background.png')]">
    <table class="table-auto w-full border-separate border-spacing-y-2.5">
      <thead>
        <tr>
          <th></th>
          <th class="text-left text-mid-blue uppercase">Name</th>
          <th class="text-right text-mid-blue pr-16 uppercase">Time</th>
        </tr>
      </thead>

      <draggable
        v-model="store.timeEntries"
        tag="tbody"
        item-key="time"
      >
        <template #item="{ element, index }">
          <LeaderboardEntry
            :rank="index + 1"
            :time-entry="element"
          />
        </template>
      </draggable>
    </table>
  </main>

</template>

<script setup>
import draggable from 'vuedraggable';

import LeaderboardEntry from '@/components/LeaderboardEntry.vue';
import { useTimeEntriesStore } from '@/stores/time_entries';

const store = useTimeEntriesStore();
</script>
