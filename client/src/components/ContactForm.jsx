import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Container, Row, Col } from 'reactstrap';

import CreateAction from '../store/actions/contacts/Create'

const ContactForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: '',
        picture: '',
        device: '',
        number: '',
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(CreateAction(form))
        setForm({
            name: '',
            picture: '',
            device: '',
            number: '',
        })
    }
    return (
        <Container>
            <Row className="justify-content-center py-5">
                <Col xs="12" sm="10" md="5" lg="5">
                    <h3 className="text-center mb-4">Add new contact</h3>
                    <Form>
                        <Input
                            type="text"
                            placeholder="Name"
                            className="mt-2"
                            id="name"
                            value={form.name}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="url"
                            placeholder="Picture"
                            className="mt-2"
                            id="picture"
                            value={form.picture}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="text"
                            placeholder="Device"
                            className="mt-2"
                            id="device"
                            value={form.device}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="number"
                            placeholder="Number"
                            className="mt-2"
                            id="number"
                            value={form.number}
                            onChange={handleOnChange}
                        />
                        <Button
                            color="primary"
                            className="mt-4"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Add 🌈
        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactForm
