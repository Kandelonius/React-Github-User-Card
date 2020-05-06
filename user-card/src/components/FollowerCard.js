import React from "react";

function FollowerCard(props) {
    console.log('props is ',props);
    // const quickRef = "props.information"
    return (
        <div>
            <header>
            Username: {props.information.login}
            </header>
            <img src={props.information.avatar_url} alt="user image" />
            <a href = {props.information.url} target="_blank">Github</a>
        </div>
    )
}

export default FollowerCard;