import {
    FlexboxGrid,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    ButtonToolbar
} from 'rsuite';

const SignIn = () => {
    return (
        <FlexboxGrid justify="center" align="middle" style={{ height: 'calc(100vh - 56px)' }}>
            <FlexboxGrid.Item>
                <FlexboxGrid justify="center" align="middle">
                    <FlexboxGrid.Item>
                        <h3>Welcome back!</h3>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid style={{ marginTop: 40 }}>
                    <FlexboxGrid.Item>
                        <Form fluid>
                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl name="email" type="email" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl name="password" type="password" />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button appearance="primary">Sign in</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}

export default SignIn
