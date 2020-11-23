import {
    FlexboxGrid,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    ButtonToolbar
} from 'rsuite';

const FormCreate = () => {
    return (
        <FlexboxGrid justify="center" align="middle">
            <FlexboxGrid.Item>
                <FlexboxGrid>
                    <FlexboxGrid.Item>
                        <h4>New contact.</h4>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid style={{ marginTop: 20 }}>
                    <FlexboxGrid.Item>
                        <Form fluid>
                            <FormGroup>
                                <ControlLabel>Name</ControlLabel>
                                <FormControl name="name" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Picture</ControlLabel>
                                <FormControl name="picture" type="url" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Device</ControlLabel>
                                <FormControl name="device" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Number</ControlLabel>
                                <FormControl name="number" type="number" />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button appearance="primary">Add</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}

export default FormCreate
