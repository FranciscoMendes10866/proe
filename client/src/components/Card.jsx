import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

import ModalComponent from './Modal'
import GetAction from '../store/actions/contacts/Get'
import DeleteAction from '../store/actions/contacts/Delete'

const CardComponent = () => {
    const dispatch = useDispatch()
    const stateList = useSelector((state) => state.contacts.list)
    const fetchAPI = () => {
        dispatch(GetAction())
    }
    const handleDelete = (id) => {
        dispatch(DeleteAction(id))
    }
    const mapList = stateList.map(contact => {
        return (
            <Col className="py-2 px-2" key={contact.id} xs="12" sm="6" md="4" lg="3">
                <Card>
                    <CardImg top width="100%" src={contact.picture} alt="" />
                    <CardBody>
                        <CardTitle tag="h5">{contact.name}</CardTitle>
                        <CardText><b>Device:</b>&nbsp;{contact.device}</CardText>
                        <CardText><b>Number:</b>&nbsp;{contact.number}</CardText>
                        <Button 
                            className="mr-2" 
                            onClick={() => handleDelete(contact.id)} 
                            color="danger">Delete</Button>
                        <ModalComponent contact={contact} />
                    </CardBody>
                </Card>
            </Col>
        )
    })
    let showCard
    if (stateList.length >= 1) {
        showCard = mapList
    } else {
        showCard = (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">You have no contacts.</CardTitle>
                    <CardSubtitle className="text-center">Create a new contact.</CardSubtitle>
                    <Button color="link">
                        <Link to="/create">Move to Create Page</Link>
                    </Button>
                </CardBody>
            </Card>
        )
    }
    useEffect(() => fetchAPI(), [])
    return (
        <Container>
            <Row className="py-5 justify-content-center">
                {showCard}
            </Row>
        </Container>
    )
}

export default CardComponent
