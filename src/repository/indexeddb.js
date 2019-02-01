export const saveLevelToIndexedDb = (level) => {
  const saveData = {
    key: '111',
    saveName: 'mainSave',
    levelIndex: level,
  }
  const request = getDatabaseRequest()
  if (request) {
    request.onsuccess = (event) => {
      const db = event.target.result
      const transaction = db.transaction('gameSaves', 'readwrite')
      const levelObjectStore = transaction.objectStore('gameSaves')
      levelObjectStore.put(saveData)
    }
  }
}

export const getSavedLevel = async () => {
  try {
    const levelIndex = await getLevel()
    return levelIndex
  } catch (errorEvent) {
    console.error('There was an error when retrieving the levelIndex from indexedDB', errorEvent)
    return 0
  }
}

const getLevel = () => {
  return new Promise((resolve, reject) => {
    const request = getDatabaseRequest()
    if (request) {
      request.onsuccess = (event) => {
        const db = event.target.result
        const transaction = db.transaction('gameSaves')
        const levelObjectStore = transaction.objectStore('gameSaves')
        const dataRequest = levelObjectStore.get('111')
        dataRequest.onsuccess = () => {
          const levelIndex = dataRequest.result && dataRequest.result.levelIndex
          resolve(levelIndex)
        }
        dataRequest.onerror = (event) => reject(event)
      }
    } else {
      reject(0)
    }
  })
}

const getDatabaseRequest = () => {
  if (!window.indexedDB) {
    // console.warn('There is no indexedDB')
    return null
  } else {
    const request = window.indexedDB.open('level-data')
    request.onerror = () => {
      console.error('There was an error when retrieving the database')
    }
    request.onupgradeneeded = (event) => {
      const db = event.target.result
      // Create the object store for storing level indexes (In this game there is only one)
      const objectStore = db.createObjectStore('gameSaves', { keyPath: 'key'})
      // Create the index for the save name
      objectStore.createIndex('saveName', 'saveName', { unique: true })
      // Create the index for the level saved for that save name
      objectStore.createIndex('levelIndex', 'levelIndex', { unique: false })
    }
    return request
  }
}