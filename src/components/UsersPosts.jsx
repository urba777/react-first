import React, { useState, useEffect } from 'react';

import API from '../shared/jsonplaceholder'; //is cia paimamas json'u URL

const UsersPosts = () => {

    //Users GET
    const [userListState, setUserListState] = useState([]);
    const [userNameState, setUserNameState] = useState('Enter new User Name');
    const [userErrorState, setUserErrorState] = useState(''); //User ERROR state

    //Posts
    const [postListState, setPostListState] = useState([]);
    const [postErrorState, setPostErrorState] = useState(''); //Post ERROR state

    //Users POST (Imitacija) kuriame USER'į
    const enterName = event => {
        setUserNameState(event.target.value);
    }
    const submitName = () => {
        API.post('users', {name: userNameState}) //Perduodame objektą, kuriame yra name, ir tas name yra userNameState STATE'as
            .then(response => {
                console.log(response)
            })
    }
    //////////////////////////////////////////

    //KREIPIMASIS I SERVERI
    useEffect(() => {

        API.get('users') //padarant klaidinga nuoroda atsiras error'as
            .then(response => {
                console.log(response.data); //Ataskymas iš serverio. Data skiltyje parodys visą info masyvo
                setUserListState(response.data);
                setUserErrorState('');
            })
            .catch(error => {
                setUserErrorState('Error while getting user information');
                console.log('Error status: ' + error.response.status);
            })

        API.get('posts')
            .then(response => {
                console.log(response.data); //Ataskymas iš serverio. Data skiltyje parodys visą info masyvo
                setPostListState(response.data);
                setPostErrorState('');
            })
            .catch(error => {
                setPostErrorState('Error while getting post information');
            })

    }, []) //Tam, kad į serverį kreiptųsi tik viena kartą MOUNT metu -> [tuščias masyvas]

    return (
        <>
            <h1>--- Users ---</h1>
            <table style={{ width: 900}}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {/* MAP'iname useriu info */}
                {userListState.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </table>
            <div style={{marginBottom: 50 }}>
                <input type="text" onChange={enterName} value={userNameState}/>
                <button onClick={submitName}>Add new user</button>
                <h3 style={{color: "red"}}>{userErrorState}</h3>
            </div>
            <h1>--- Posts ---</h1>
            <table style={{ width: 900 }}>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {/* MAP'iname postu info */}
                {postListState.map(post =>
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )}
            </table>
            <div style={{marginBottom: 50 }}>
                <h3 style={{color: "red"}}>{postErrorState}</h3>
            </div>
        </>
    );
}

export default UsersPosts;