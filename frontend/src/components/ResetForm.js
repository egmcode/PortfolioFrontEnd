import React, {useState, useEffect} from 'react';
import '../styles/ResetForm.css';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { authApi } from '../componentsSvcs/Api.js';
import { checkPW } from '../componentsSvcs/Password.js';

function ResetForm()
{
    const [pw, setPW] = useState("");
    const [confPW, setCPW] = useState("");
    const [stateMsg, setSMsg] = useState("");
    const [user, setUser] = useState({});
    const [pwMatch, setPWM] = useState(false);
    let {token} = useParams();

    useEffect(() => 
    {
        (async () => 
        {
            await authApi.post('/verify', {JWT: token})
            .then(response =>
            {
                if(response.data["status"] === "AUTH")
                    setUser({user_name: response.data["respBody"]["user_name"]});
                else
                    setSMsg("Password Reset Link Expired");
            })
            .catch(() => {
                setSMsg("Password Reset Link Expired");
            });
        })()
    }, []);

    const resetPass = async event => 
    {
        event.preventDefault();

        if(pwMatch)
        {
            let userReq = {
                item: "pass_word",
                value: pw,
                user_name: user["user_name"],
                type: "reset",
                JWT: token
            };

            authApi.post('/updateUser', userReq)
            .then(response => 
            {
                if(response.data["status"] === "successful")
                    setSMsg("Password Successfully Updated");
                else
                    setSMsg("Error Updating Password - Please Get A New Link");
            });
        }
        else
        {
            setSMsg("Passwords must match");
        }
    }

    const changePW = event =>
    {
        setPW(event.target.value);
        let passResp = checkPW(event.target.value, confPW);

        setSMsg(passResp["status"]);
        setPWM(passResp["valid"]);
    }

    const changeVPW = event =>
    {
        setCPW(event.target.value);
        let passResp = checkPW(event.target.value, pw);

        setSMsg(passResp["status"]);
        setPWM(passResp["valid"]);
    }
    

    return(
        <div className="resetform-container">
            <div className="resetform-input-box">
                <h1>Reset Password</h1>
                <form onSubmit={resetPass}>
                    <table className='resetform-form'>
                        <tbody>
                            <tr className="resetform-list-item">
                                <td><label>New Password: </label></td>
                                <td><input 
                                name='password'
                                type='password'
                                value={pw}
                                onChange={changePW}
                                required /></td>
                            </tr>
                            <tr className="resetform-list-item">
                                <td><label>Confirm Password: </label></td>
                                <td><input 
                                name='password'
                                type='password'
                                value={confPW}
                                onChange={changeVPW}
                                required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="resetform-buttons">
                        <li>
                            <button type="submit" className="resetform-button">Reset</button>
                            <Link to='/'><button className="resetform-button">Home</button></Link>
                        </li>
                    </ul>
                    <p id="resetform-state-msg">{stateMsg}</p>
                </form>
            </div>
        </div>
    )
}

export default ResetForm;