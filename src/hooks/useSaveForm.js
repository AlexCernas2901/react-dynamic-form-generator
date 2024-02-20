import { useState } from 'react'

export function useSaveForm() {
  const [savedData, setSavedData] = useState(null)

  const fetchSaveData = (form) => {
    fetch('https://express-dynamic-form-generator-dev-nxze.4.us-1.fl0.io/forms/create-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((response) => response.json())
      .then((data) => setSavedData(data))
      .catch((error) => console.log(error.message))
  }

  return { fetchSaveData, savedData }
}
