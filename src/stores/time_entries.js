import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useCollection } from 'vuefire';

const firebaseConfig = {
  apiKey: 'AIzaSyAJBkei-RsKf0oG6-6fTW42em_PKbkYpwg',
  authDomain: 'snowflake-cc766.firebaseapp.com',
  databaseURL: 'https://snowflake-cc766-default-rtdb.firebaseio.com',
  projectId: 'snowflake-cc766',
  storageBucket: 'snowflake-cc766.appspot.com',
  messagingSenderId: '197336973600',
  appId: '1:197336973600:web:b5fe415506dbc9ac071745',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timeEntriesCollection = collection(db, 'time_entries');

export const useTimeEntriesStore = defineStore('leaderboard', () => {
  const timeEntries = useCollection(timeEntriesCollection);

  const allTimeEntries = computed(() => timeEntries.value.sort((a, b) => a.time.replace(':', '') - b.time.replace(':', '')));

  async function addTimeEntry(timeEntry) {
    await setDoc(doc(db, 'time_entries', timeEntry.id), timeEntry);
  }

  return {
    addTimeEntry,
    allTimeEntries,
    timeEntries,
  };
});
