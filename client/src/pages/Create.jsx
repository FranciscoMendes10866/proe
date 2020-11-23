import { Container, FlexboxGrid } from 'rsuite';

import Form from '../components/Form'

const Create = () => {
    return (
        <Container>
            <FlexboxGrid justify="center" align="middle" style={{ height: 'calc(100vh - 56px)' }}>
                <FlexboxGrid.Item>
                    <Form />
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Container>
    )
}

export default Create
