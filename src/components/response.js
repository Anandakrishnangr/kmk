import './css/searchresult.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useReducer } from "react";

import Axios from 'axios'

const initialState = {
    data: '',
    error: '',
    load: true
}
const reducer = (state, action) => {

    switch (action.type) {
        case 'success':

            return {
                data: action.payload,
                load: false,
                error: ''
            }


        case 'err':
            return {
                data: '',
                load: false,
                error: 'something went wrong'
            }
        default:
            return state

    }
}
function Response() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        Axios.get('http://localhost:3000/Useraccount/response')

            .then(
                res => {
                    dispatch({ type: 'success', payload: res.data })
                    console.log(res.data)
                }
            )
            .catch(
                res => {
                    dispatch({ type: 'err' })
                }
            )
    }, [])
    return (
        <div className="container pt-5">
            sad
            <div>
                {state.load ? 'loading' : state.data.name}
                {state.error ? state.error : ''}
            </div>
        </div>
    )
}
export default Response