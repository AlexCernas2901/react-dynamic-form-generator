import './App.css'
import jsonForm from './../jsonForm.json'
import { useEffect, useState } from 'react'

function App() {
  const [formFields, setFormFields] = useState()
  const [formData, setFormData] = useState({})
  const [forms, setForms] = useState([])

  const handleSubmit = async (event) => {
  }

  const handleDelete = async (id) => {
  }

  return (
    <div className='container'>
      <div className='box'>
        <form onSubmit={handleSubmit} className='form'>
          {formFields?.map((section, index) => {
            return (
              <div key={index}>
                <h2>{section.title}</h2>
                {section.fields.map(({ field }, index) => {
                  return (
                    <div key={index}>
                      <label htmlFor={field.name}>{field.label}:</label>
                      <input
                        id={field.id}
                        className={field.class}
                        type={field.type}
                        pattern={field.pattern}
                        placeholder={field.placeholder}
                        required={field.required}
                        name={field.name}
                        minLength={
                          field.minLength !== undefined
                            ? field.minLength
                            : undefined
                        }
                        maxLength={
                          field.maxLength !== undefined
                            ? field.maxLength
                            : undefined
                        }
                        min={field.min !== undefined ? field.min : undefined}
                        onChange={handleInputChange}
                        value={formData[field.name] || ''}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='box'>
        {forms.map((form) => {
          console.log(form)
          return (
            <form action='' id={form._id} key={form._id} className='form'>
              <input type='text' value={form.data.first_name} readOnly />
              <input type='text' value={form.data.last_name} readOnly />
              <input type='email' value={form.data.email} readOnly />
              <input type='text' value={form.data.password} readOnly />
              <input type='text' value={form.data.confirmPassword} readOnly />
              <input type='tel' value={form.data.phone_number} readOnly />
              <input type='date' value={form.data.birth_date} readOnly />
              <button onClick={() => handleDelete(form._id)}>
                Delete
              </button>{' '}
            </form>
          )
        })}
      </div>
    </div>
  )
}

export default App
