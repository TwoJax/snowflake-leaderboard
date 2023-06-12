<template>
  <tr class="rounded-lg bg-white shadow">
    <td class="pl-10 py-4 rounded-bl-lg rounded-tl-lg w-32">#{{ rank }}</td>

    <td class="py-4">
      <div class="flex flex-col">
        <div class="text-lg font-bold">
          {{ timeEntry.first_name }} {{ timeEntry.last_name }}
        </div>

        <div class="text-gray-500">
          {{ timeEntry.id }}
        </div>
      </div>
    </td>

    <td class="font-semibold pr-16 py-4 rounded-br-lg rounded-tr-lg text-right">{{ timeEntry.time }}</td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  rank: {
    type: Number,
    required: true,
  },

  timeEntry: {
    type: Object,
    required: true,
  },
});
</script>
