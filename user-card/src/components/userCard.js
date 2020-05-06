import React from "react";

function UserCard(props) {
    console.log('props is ',props);
    // const quickRef = "props.information"
    return (
        <div>
            <header>
                {props.information.name}
            </header>
            <img src={props.information.avatar_url} alt="user image" />
            <p>Username: {props.information.login}</p>
            <p>Bio: {props.information.bio}</p>
            <p>Repositories: {props.information.public_repos}</p>
            <p>Followers: {props.information.followers}</p>
            <p>Follosing: {props.information.following}</p>
            <a href = {props.information.url} target="_blank">Github</a>
        </div>
    )
}

export default UserCard;