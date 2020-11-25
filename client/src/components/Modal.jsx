import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';

import UpdateAction from '../store/actions/contacts/Update'

const ModalComponent = ({ contact }) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({
        name: contact.name,
        picture: contact.picture,
        device: contact.device,
        number: contact.number,
    })
    const toggle = () => setModal(!modal);
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submitUpdate = (e) => {
        e.preventDefault()
        const formData = {
            id: contact.id,
            name: form.name,
            picture: form.picture,
            device: form.device,
            number: form.number,
        }
        dispatch(UpdateAction(formData))
        setForm({
            name: '',
            picture: '',
            device: '',
            number: '',
        })
        setModal(!modal)
    }
    return (
        <>
            <Button color="warning" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form className="px-2 py-2">
                        <Input
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleOnChange}
                            type="text"
                        />
                        <Input
                            className="mt-2"
                            name="picture"
                            placeholder="Picture"
                            value={form.picture}
                            onChange={handleOnChange}
                            type="url"
                        />
                        <Input
                            className="mt-2"
                            name="device"
                            placeholder="Device"
                            value={form.device}
                            onChange={handleOnChange}
                            type="text"
                        />
                        <Input
                            className="mt-2"
                            name="number"
                            placeholder="Number"
                            value={form.number}
                            onChange={handleOnChange}
                            type="number"
                        />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitUpdate}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalComponent
