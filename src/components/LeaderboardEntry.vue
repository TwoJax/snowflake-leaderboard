<template>
  <li class="flex items-center rounded-lg bg-white shadow">
    <div class="pl-10 py-4 rounded-bl-lg rounded-tl-lg w-32 text-gray-400 italic text-sm">#{{ rank }}</div>

    <div class="py-4 flex flex-col flex-1">
      <div class="text-lg font-bold">
        {{ timeEntry.first_name }} {{ timeEntry.last_name }}
      </div>

      <div class="text-gray-500">
        {{ timeEntry.id }}
      </div>
    </div>

    <div class="font-semibold pr-16 py-4 rounded-br-lg rounded-tr-lg text-right">{{ timeEntry.time }}</div>
  </li>
</template>

<script setup>
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
