import { DynamicForm } from './components/DynamicForm.jsx'
import formData from './form.json'

export function App () {
  return (
    <div>
      <DynamicForm json={formData} />
    </div>
  )
}
