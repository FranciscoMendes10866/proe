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
                list: state.list.filter((contact) => contact.id !== payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                list: [payload, ...state.list]
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                list: state.list.map((contact) => {
                    if (contact.id === payload.id) {
                        return payload
                    } else {
                        return contact
                    }
                })
            }
        case 'CLEAN_CONTACTS':
            return {
                ...state,
                list: payload
            }
        default:
            return state
    }
}


export default contactsReducer
