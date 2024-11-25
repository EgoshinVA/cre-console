import React, {useState} from "react";
import user from "../components/User/User";

export default {
    title: 'React Memo Demo',
}

const NewMessagesCount = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Dima', 'Andrey', 'Slava'])

    const addUser = () => {
        setUsers([...users])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCount count={counter}/>
        <Users users={users}/>
    </>
}