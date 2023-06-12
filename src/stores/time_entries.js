import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getFirestore,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { defineStore } from 'pinia';
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
const timeEntriesCollection = query(collection(db, 'time_entries'), orderBy('time'));

export const useTimeEntriesStore = defineStore('leaderboard', () => {
  const timeEntries = useCollection(timeEntriesCollection);

  async function addTimeEntry(timeEntry) {
    const timeEntryAttrs = Object.assign(timeEntry, {
      time: `${timeEntry.minutes}:${timeEntry.seconds}`,
    });

    delete timeEntryAttrs.minutes;
    delete timeEntryAttrs.seconds;

    await setDoc(doc(db, 'time_entries', timeEntry.id), timeEntryAttrs);
  }

  return {
    addTimeEntry,
    timeEntries,
  };
});
