import React from "react";
import Div from './UserStyles.jsx';

function UserCard(props) {
    // console.log('props is ',props);
    // const quickRef = "props.information"
    return (
        <Div>
            <header>
                {props.information.name}
            </header>
            <img src={props.information.avatar_url} alt="user" />
            <p>Username: {props.information.login}</p>
            <p>Bio: {props.information.bio}</p>
            <p>Repositories: {props.information.public_repos}</p>
            <p>Followers: {props.information.followers}</p>
            <p>Following: {props.information.following}</p>
            <a href = {props.information.url} target="_blank">Github</a>
        </Div>
    )
}

export default UserCard;