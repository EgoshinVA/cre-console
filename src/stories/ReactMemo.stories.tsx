import React, {useMemo, useState} from "react";
import user from "../components/User/User";

export default {
    title: 'React Memo Demo',
}

const NewMessagesCount = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
}


export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Dima', 'Andrey', 'Slava'])

    const addUser = () => {
        setUsers([...users])
    }

    const filteredUsers = useMemo(() => {
        return users.filter(u => u.length < 10)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCount count={counter}/>
        <Users users={filteredUsers}/>
    </>
}