import { renderForm } from '../utils/renderForm.jsx'
import { useState, useEffect } from 'react'
import jsonForm from '../form.json'
import { useSaveForm } from '../hooks/useSaveForm.js'
import { useGetForms } from '../hooks/useGetForms.js'
import { useDeleteForm } from '../hooks/useDeleteForm.js'

export function FormFile() {
  const [formFields, setFormFields] = useState()
  const { fetchSaveData, savedData } = useSaveForm()
  const { fetchGetData, obtainedData } = useGetForms()
  const { fetchDeleteData, deletedData } = useDeleteForm()
  console.log(savedData)

  useEffect(() => {
    fetchGetData()
  }, [savedData, deletedData])

  useEffect(() => {
    const fields = jsonForm?.data?.map((data) => data.section) ?? []
    setFormFields(fields)
  }, [jsonForm])

  const handleSaveForm = () => {
    fetchSaveData(jsonForm)
  }

  const handleDelete = (id) => {
    fetchDeleteData(id)
  }
  console.log(obtainedData)

  return (
    <div className='container'>
      <div className='box'>
        {formFields?.map((section, index) => renderForm(section.fields, index))}
        <button onClick={handleSaveForm}>guardar</button>
      </div>
      <div className='box'>
        {obtainedData?.forms?.map((form) => (
          <div key={form._id} className='form'>
            {form.data.map((data, index) =>
              renderForm(data.section.fields, index)
            )}
            <button onClick={() => handleDelete(form._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}
