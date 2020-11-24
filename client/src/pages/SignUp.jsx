import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    FlexboxGrid,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    ButtonToolbar
} from 'rsuite';

import SignUpAction from '../store/actions/auth/SignUp'

const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
    })
    const handleOnChange = ({ name, value }) => {
        setState({ ...state, [name]: value })
    }
    const handleDispatch = () => {
        dispatch(SignUpAction(state))
        setState({
            username: '',
            email: '',
            password: '',
        })
        history.push('/dashboard')
    }
    return (
        <FlexboxGrid justify="center" align="middle" style={{ height: 'calc(100vh - 56px)' }}>
            <FlexboxGrid.Item>
                <FlexboxGrid justify="center" align="middle">
                    <FlexboxGrid.Item>
                        <h3>Create an account.</h3>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <FlexboxGrid style={{ marginTop: 40 }}>
                    <FlexboxGrid.Item>
                        <Form fluid>
                            <FormGroup>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl
                                    value={state.username}
                                    onChange={handleOnChange}
                                    name="username"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    value={state.email}
                                    onChange={handleOnChange}
                                    name="email"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={state.password}
                                    onChange={handleOnChange}
                                    name="password"
                                    type="password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button
                                        onClick={handleDispatch}
                                        appearance="primary"
                                    >
                                        Sign up
                                    </Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}

export default SignUp
