import React from "react";

type UserPropsType = {
    userName: string
}

function User(props: UserPropsType) {
    return (
        <div>
            <div>{props.userName}</div>
        </div>
    )
}

export default User;