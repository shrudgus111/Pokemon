import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {noticeDB, reviewDB } from '@/assets/firebase'


const BoardDetailBlock = styled.div`
max-width:600px; margin:0 auto 50px; 
table {
    col:nth-child(1) { width:100px; }
    col:nth-child(2) { width:auto; }
    td { padding:5px;
        input { width:100%; border:1px solid #ddd; height:30px; padding:5px; }
        textarea { width:100%; border:1px solid #ddd; padding:5px; height:200px }
    }
}
.btn { text-align:center; margin-top:20px;
    a { margin:0 10px; padding:10px 20px; background:#ddd;
        font-size:14px }
}

`

const BoardDetail = ({post}) => {
    
    const user = useSelector(state=>state.members.user)
    const type = useSelector(state=>state.boards.type)

    const navigate = useNavigate()

    const onRemove = (e)=>{
         e.preventDefault()
         if (type=="관리자") {
            noticeDB.child(post.key).remove()
        } else if (type=="유저") {
            reviewDB.child(post.key).remove()
              
        }
            navigate("/boardList")
          
    }

    useEffect(()=>{
       if (type=="관리자") {
        noticeDB.child(post.key).update({
           'hit' :post.hit+1
        })
    }else{
        reviewDB.child(post.key).update({
            'hit' :post.hit+1
        })
    }
      }, [])


    return (
        <BoardDetailBlock>
              
                <table border="1">
                    <colgroup>
                        <col />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>
                                <input type="text" name="writer" value={post.writer} disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input type="text" name="subject" value={post.subject} disabled  />
                            </td>
                        </tr>
                        <tr>
                            <td>RP</td>
                            <td>
                                <textarea name="content" value={post.content} disabled ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn">
                    
                  { (user && post.writer==user.userId) &&
                  <>
                   <Link to ={`/boardModify/${post.subject}`} state={{post:post}}>수정</Link>
                     <a href="#" onClick={onRemove}>삭제</a>
                     </>
                   }
                    <Link to="/boardList">목록</Link>
                </div>
         
        </BoardDetailBlock>
    );
};

export default BoardDetail;