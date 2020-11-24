import contactsInitialState from '../initialStates/contacts'

const contactsReducer = (state = contactsInitialState, { payload, type }) => {
    switch (type) {
        case 'GET_CONTACTS':
            return {
                ...state,
                list: payload
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            }
        case 'ADD_CONTACT':
        case 'UPDATE_CONTACT':
            return {
                ...state,
                list: [payload, ...state.list]
            }
        default:
            return state
    }
}


export default contactsReducer
