import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components'
import { fetchMembers, userLogin } from '@/store/member'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginSectionBlock = styled.div`
    max-width:600px; margin:50px auto; 
    border:1px solid #ddd;
    padding:39px 30px;
    h2{
        margin-bottom:24px;
    }
    table { 
        col:nth-child(1) { width:100px }
        col:nth-child(2) { width:auto }
        td { padding:5px; 
            &:nth-child(1) { text-align:left}
            input { border:1px solid #ddd; height:30px; width:100%;
                text-indent:1em; }
        }
    }
    .btn { text-align:center; margin-top:20px; 
        button { padding:15px 35px; background:#2da5da; color:#fff; border-radius:5px; }
    }
`

const LoginSection = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const members = useSelector(state=>state.members.members)
    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")

    const userIdRef = useRef("")
    const userPwRef = useRef("")

    useEffect(()=>{
        dispatch(fetchMembers())
    }, [])

    const handleLogin = (e)=>{
        e.preventDefault()
        if (!userId) {
            alert("이메일을 입력하세요.")
            userIdRef.current.focus()
            return
        }
        if (!userPw) {
            alert("비밀번호를 입력하세요.")
            userPwRef.current.focus()
            return
        }
        let findUser = members.find(item=>item.userId==userId)  // { userId:"", userPw:""}
        if (findUser) {
            if (findUser.userPw!=userPw) {
                alert("비밀번호가 틀렸습니다.")
                userPwRef.current.focus()
                return false
            } else {
                dispatch(userLogin(findUser))
                navigate('/')
            }
        } else {
            alert("회원이 아닙니다.")
            userIdRef.current.focus()
            return false
        }
    }

    return (
        <LoginSectionBlock>
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
                <table>
                    <colgroup>
                        <col />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><label htmlFor="userId">이메일 </label></td>
                            <td><input ref={userIdRef} type="text" id="userId" name="userId" onChange={ (e)=>setUserId(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userPw">비밀번호 </label></td>
                            <td><input ref={userPwRef} type="password" id="userPw" name="userPw" onChange={ (e)=>setUserPw(e.target.value) } /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn">
                    <button type="submit">로그인</button>
                </div>
            </form>
        </LoginSectionBlock>
    );
};

export default LoginSection;