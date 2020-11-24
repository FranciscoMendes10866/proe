import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'reactstrap';

import SignUpAction from '../store/actions/auth/SignUp'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(SignUpAction(form))
    setForm({
      username: '',
      email: '',
      password: '',
    })
    history.push('/dashboard')
  }
  return (
    <Form>
      <Input
        type="text"
        placeholder="Username"
        id="username"
        value={form.username}
        onChange={handleOnChange}
      />
      <Input
        type="email"
        placeholder="Email"
        id="email"
        value={form.email}
        onChange={handleOnChange}
      />
      <Input
        type="password"
        placeholder="Password"
        id="password"
        value={form.password}
        onChange={handleOnChange}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
      >
        Button 🎩
        </Button>
    </Form>
  )
}

export default App
