import { renderFields } from './renderFields.jsx'

export const renderForm = (fields, index) => (
  <form key={index}>{fields.map((field) => renderFields(field))}</form>
)
