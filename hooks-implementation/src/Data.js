import React from 'react';

const Data = (props) =>

    [<div>
        <br></br>
        { props.userInfo.name ? <h1><b>{props.userInfo.name}</b></h1> : "" }
        { props.userInfo.avatar_url ? <img src= {props.userInfo.avatar_url} alt="avatar" ></img> : "" }
        <h2><a href={props.userInfo.html_url}>{props.userInfo.login}</a></h2>
        { props.userInfo ? <p><a href={props.userInfo.repos_url}>{props.userInfo.public_repos} public repos</a></p> : "" }
        { props.userInfo.email ? <p>Email: {props.userInfo.email}</p> : "" }
        { props.userInfo.bio ? <p>Bio: {props.userInfo.bio}</p> : "" }
    </div>]

export default Data;
