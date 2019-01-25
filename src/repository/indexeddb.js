export const saveLevelToIndexedDb = (level) => {
  if (!window.indexedDB) {
    console.warn('There is no indexedDB')
  } else {
    const saveData = {
      key: '111',
      saveName: 'mainSave',
      levelIndex: level,
    }
    const request = window.indexedDB.open('level-data')
  
    request.onerror = (event) => {
      console.error('There was an error in the database request when saving a level.', event)
    }
  
    request.onsuccess = (event) => {
      const db = event.target.result
      console.log('The request.onsuccess was fired: ', db)
      makeTransactionToSave(db, saveData)

    }

    request.onupgradeneeded = (event) => {
      console.log('onupgradedneeded has been triggered')
      const db = event.target.result

      // Create the object store for storing level indexes (In this game there is only one)
      const objectStore = db.createObjectStore('gameSaves', { keyPath: 'key'})

      // Create the index for the save name
      objectStore.createIndex('saveName', 'saveName', { unique: true })

      // Create the index for the level saved for that save name
      objectStore.createIndex('levelIndex', 'levelIndex', { unique: false })
    }
  }
}

const makeTransactionToSave = (db, saveData) => {
  const transaction = db.transaction('gameSaves', 'readwrite')
  transaction.oncomplete = () => console.log('transaction is complete')
  const levelObjectStore = transaction.objectStore('gameSaves')
  levelObjectStore.put(saveData)
}

export const getLevelFromIndexedDb = () => {
  console.log('get level from indexedDb')
  return null
}