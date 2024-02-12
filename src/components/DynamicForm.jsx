import { useState, useEffect } from 'react'

export function DynamicForm ({ json }) {
  const [formFields, setFormFields] = useState([])

  // funcion para mandar a guardar en la base de datos
  const handleSubmit = () => {}

  useEffect(() => {
    // const method = json?.method
    const fields = json?.data?.[0]?.section?.fields ?? [] // extrallendo los campos del json si existen y si no, un array vacio
    setFormFields(fields)
  }, [json]) // se ejecuta cuando el json cambia

  const renderField = (fields) => {
    const { field } = fields // deconstruyendo el objeto fields

    // renderizando los campos del formulario por tipo
    switch (field.type) {
      case 'text':
        return (
          <div key={field.id}>
            <input
              id={field.id}
              className={field.class}
              label={field.label}
              type={field.type}
              data={field.data}
              mask={field.mask}
              placeholder={field.placeholder}
              required={field.required}
              name={field.name}
              lowerLimit={field.lowerLimit}
              upperLimit={field.lpperLimit}
            />
          </div>
        )
      case 'email':
        return (
          <div key={field.id}>
            <input
              id={field.id}
              className={field.class}
              label={field.label}
              type={field.type}
              data={field.data}
              mask={field.mask}
              placeholder={field.placeholder}
              required={field.required}
              name={field.name}
              lowerLimit={field.LowerLimit}
              upperLimit={field.LpperLimit}
            />
          </div>
        )
      case 'password':
        return (
          <div key={field.id}>
            <input
              id={field.id}
              className={field.class}
              label={field.label}
              type={field.type}
              data={field.data}
              mask={field.mask}
              placeholder={field.placeholder}
              required={field.required}
              name={field.name}
              lowerLimit={field.LowerLimit}
              upperLimit={field.LpperLimit}
            />
          </div>
        )
      case 'date':
        return (
          <div key={field.id}>
            <input
              id={field.id}
              className={field.class}
              label={field.label}
              type={field.type}
              data={field.data}
              mask={field.mask}
              placeholder={field.placeholder}
              required={field.required}
              name={field.name}
              lowerLimit={field.LowerLimit}
              upperLimit={field.LpperLimit}
            />
          </div>
        )
      case 'checkbox':
        return (
          <div key={field.id}>
            <input
              id={field.id}
              className={field.class}
              label={field.label}
              type={field.type}
              required={field.required}
              name={field.name}
              lowerLimit={field.LowerLimit}
              upperLimit={field.LpperLimit}
              optionIndex={field.optionIndex}
              checked={field.checked}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <form>
      {formFields.map((field) => renderField(field))}
      <button onClick={handleSubmit}>Guardar</button>
    </form>
  )
}
