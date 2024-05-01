import React, {useState} from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

const BoardListBlock = styled.div`
    margin:0px 0 50px; 
    .application__type {
        display: flex;
        justify-content: center;
        border-bottom:1px solid #000;
        margin-bottom:50px;
        a {
          text-align: center;
          width:300px;
          font-size:25px;
          margin:0 100px;
          padding-bottom: 15px;
        
          background:#fff;
          border-bottom:1px solid #000;
          &.on {
              background:#fff;
              color:#ffa70e;
              border-bottom:5px solid #ffa70e;
              font-weight:700;
          }
        }
      }
    table {
        col:nth-child(1) {width:50px }
        col:nth-child(2) {width:auto }
        col:nth-child(3) {width:200px }
        col:nth-child(4) {width:100px }
        col:nth-child(5) {width:100px }
        th { padding:5px }
        td { 
            padding:5px; text-align:center;
            &:nth-child(2) { text-align:left }
        }
    }
    .btn {
        text-align:center; margin:20px 0; 
        a { padding:10px 20px; background:blue; color:#fff }
    }
`


const BoardList = () => {
    const [active, setActive] = useState(1);
    const handleClick = (id) => {
        setActive(id);
    };
    const menuItems = [
        { menu: '대회안내', id: 0 },
        { menu: '플레이어즈', id: 1 },
    ];

    

    const list = useSelector(state=>state.boards.list)
    const type = useSelector(state=>state.boards.type)
    const user = useSelector(state=>state.members.user)

    return (
        <BoardListBlock>
              <div className="application__wrap">
                <div className="application__type">
                    {menuItems.map((item) => (
                        <Link
                        key={item.id}
                        to={item.id === 0 ? '/application' : '/boardList'}
                        className={active === item.id ? 'on' : ''} // active 상태 확인하여 'on' 클래스 추가
                        onClick={() => handleClick(item.id)}
                    >
                        {item.menu}
                    </Link>
                    ))}
                </div>
            <table border="1">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {   list.length>0 &&
                        list.map((post, index)=>(
                            <tr key={index}>
                                <td>{list.length - index}</td>
                                <td>{post.subject}</td>
                                <td>{post.writer}</td>
                                <td>{ dayjs(post.date).format('YYYY-MM-DD') }</td>
                                <td>{post.hit}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            { (type=="notice" && user && user.userId=="tsalt@hanmail.net") &&
                <div className="btn">
                    <Link to="/boardWrite">글쓰기</Link>
                </div>
            }
            {
                (type=="review" && user) &&
                <div className="btn">
                    <Link to="/boardWrite">글쓰기</Link>
                </div>
            }
                 </div>
        </BoardListBlock>
    );
};

export default BoardList;