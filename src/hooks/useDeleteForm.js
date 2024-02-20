import { useState } from 'react'

export function useDeleteForm() {
  const [deletedData, setDeletedData] = useState(false)

  const fetchDeleteData = (id) => {
    setDeletedData(false)
    fetch(`https://express-dynamic-form-generator-dev-nxze.4.us-1.fl0.io/forms/delete-form/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al eliminar los datos')
        }
        if (response.status === 204) {
          setDeletedData(true)
        } else {
          return response.json()
        }
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return { deletedData, fetchDeleteData }
}
