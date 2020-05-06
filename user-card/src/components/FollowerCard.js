import React from "react";
import Div from './FollowerStyles.jsx';

function FollowerCard(props) {
    // console.log('follower props is ',props);
    // const quickRef = "props.details"
    return (
        <Div>
            <header>
            Username: {props.details.login}
            </header>
            <img src={props.details.avatar_url} alt="user image" />
            <a href = {props.details.url} target="_blank">Github</a>
        </Div>
    )
}

export default FollowerCard;