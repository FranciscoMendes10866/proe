import { useState } from 'react'
import { Form, Input, Button } from 'reactstrap';

const App = () => {
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
    console.log(form)
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
