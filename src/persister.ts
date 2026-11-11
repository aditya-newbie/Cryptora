import { openDB, type DBSchema } from "idb";

interface CryptoraDB extends DBSchema {
  queryCache: {
    key: string,
    value: string
  }
  
}

const dbPromise = openDB<CryptoraDB>("cryptoraDB", 1, {
  upgrade(db) {
    db.createObjectStore("queryCache")
  }
})

async function getItem(key: string) {
  const db = await dbPromise;
  return db.get("queryCache", key)
}

async function setItem(key: string, value: string) {
  const db = await dbPromise;
  return db.put("queryCache", value, key);
}

 async function removeItem(key: string) {
  const db = await dbPromise;
  return db.delete("queryCache", key);
}

export const storage = {
  getItem,
  setItem, 
  removeItem,
}