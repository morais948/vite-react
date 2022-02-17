import MyContext from "../contexts/myContext"
import { useContext, useRef } from 'react'

const EditUser = () => {
    const { user, setUser }: any = useContext(MyContext)
    const input: null | any = useRef(null)

    const handleChange = (event: any): void => {
        let value = event.target.value
        input.current.value = value
    }

    return (
        <>
            <input className="form-control mb-2" ref={input} type="text" onChange={handleChange} defaultValue={user.name} />

            <button className="btn btn-primary mx-2 px-4" onClick={() => setUser({...user, name: input.current.value})}>edit</button>
        </>
    )
}

export default EditUser