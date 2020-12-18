import React from "react";
import Div from './UserStyles.jsx';

function UserCard(props) {
    // console.log('props is ',props);
    // const quickRef = "props.information"
    return (
        <Div>
            <header>
                <h1>
                    {props.information.name}
                </h1>
            </header>
            <img src={props.information.avatar_url} alt="user" />
            <div className="infoDiv">
                <h3>Username: {props.information.login}</h3>
                <h3>Bio: {props.information.bio}</h3>
                <h3>Repositories: {props.information.public_repos}</h3>
                <h3>Followers: {props.information.followers}</h3>
                <h3>Following: {props.information.following}</h3>
            </div>
            <a href={props.information.url} target="_blank">Github</a>
        </Div>
    )
}

export default UserCard;