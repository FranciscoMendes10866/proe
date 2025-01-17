import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Container, Row, Col } from 'reactstrap';

import SignInAction from '../store/actions/auth/SignIn'

const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(SignInAction(form, history))
    setForm({
      email: '',
      password: '',
    })
  }
  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col xs="12" sm="10" md="5" lg="5">
          <h3 className="text-center mb-4">Welcome back</h3>
          <Form>
            <Input
              type="email"
              className="mt-2"
              placeholder="Email"
              id="email"
              value={form.email}
              onChange={handleOnChange}
            />
            <Input
              className="mt-2"
              type="password"
              placeholder="Password"
              id="password"
              value={form.password}
              onChange={handleOnChange}
            />
            <Button
              color="primary"
              className="mt-4"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in 🎩
        </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
