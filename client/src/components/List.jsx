import { useState } from 'react'
import { FlexboxGrid, Panel, Col, IconButton, Icon, ButtonToolbar } from 'rsuite'

import Modal from './Modal'

const ContactList = () => {
    const [list] = useState([
        {
            id: 1,
            name: 'Francisco Mendes',
            picture: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
            device: 'Phone',
            number: '91231231312312'
        },
        {
            id: 2,
            name: 'Rodrigo Mercador',
            picture: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
            device: 'Phone',
            number: '91231231312312'
        },
        {
            id: 3,
            name: 'Ricardo Malva',
            picture: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
            device: 'Phone',
            number: '91231231312312'
        },
        {
            id: 4,
            name: 'Francisco Fagundo',
            picture: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
            device: 'Phone',
            number: '91231231312312'
        },
        {
            id: 5,
            name: 'João Gomes',
            picture: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
            device: 'Phone',
            number: '91231231312312'
        },
    ])
    const handleDelete = (id) => {
        console.log(id)
    }
    const mapList = list.map(contact => {
        return (
            <FlexboxGrid.Item key={contact.id} componentClass={Col} sm={24} md={24} lg={6}>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', marginTop: 25 }}>
                    <img src={contact.picture} height="240" alt="" />
                    <Panel header={contact.name}>
                        <p>
                            <small><b>Device:</b>&nbsp;{contact.device}</small><br />
                            <small><b>Number:</b>&nbsp;{contact.number}</small>
                        </p>
                        <ButtonToolbar style={{ marginTop: 20 }}>
                            <IconButton onClick={() => handleDelete(contact.id)} color="red" icon={<Icon icon="trash-o" />} />
                            <Modal contact={contact} />
                        </ButtonToolbar>
                    </Panel>
                </Panel>
            </FlexboxGrid.Item>
        )
    })
    return (
        <FlexboxGrid>
            {mapList}
        </FlexboxGrid>
    )
}

export default ContactList
