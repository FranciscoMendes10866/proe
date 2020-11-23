import { useState } from 'react'
import {
    Modal,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    IconButton,
    Icon
} from 'rsuite'

const Update = ({ contact }) => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        name: contact.name,
        picture: contact.picture,
        device: contact.device,
        number: contact.number
    })
    const handleOnChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    }
    const handleShowModal = () => {
        setShow(true)
    }
    const sendUpdate = () => {
        const data = {
            id: contact.id,
            name: form.name,
            picture: form.picture,
            device: form.device,
            number: form.number
        }
        console.log(data)
        setShow(false)
    }
    const close = () => {
        setShow(false)
    }
    return (
        <>
            <IconButton onClick={handleShowModal} color="blue" icon={<Icon icon="edit" />} />
            <Modal show={show} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Update Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl value={form.name} name="name" onChange={handleOnChange} type="text" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Picture</ControlLabel>
                            <FormControl value={form.picture} name="picture" onChange={handleOnChange} type="url" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Device</ControlLabel>
                            <FormControl value={form.device} name="device" onChange={handleOnChange} type="text" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Number</ControlLabel>
                            <FormControl value={form.number} name="number" onChange={handleOnChange} type="number" />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={sendUpdate} appearance="primary">
                        Update
            </Button>
                    <Button onClick={close} appearance="subtle">
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Update
