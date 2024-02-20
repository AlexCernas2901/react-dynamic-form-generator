import { useState } from 'react'

export function useGetForms() {
  const [obtainedData, setObtainedData] = useState(null)

  const fetchGetData = () => {
    fetch('https://express-dynamic-form-generator-dev-nxze.4.us-1.fl0.io/forms/get-forms')
      .then((response) => {
        if (!response.ok) {
          console.log('Error al obtener los datos')
        }
        return response.json()
      })
      .then((data) => setObtainedData(data))
      .catch((error) => console.log(error.message))
  }

  return { obtainedData, fetchGetData }
}
