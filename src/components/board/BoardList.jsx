import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const BoardListBlock = styled.div`
    margin: 0px 0 50px; 
    .application__type {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #000;
        margin-bottom: 50px;
        a {
            text-align: center;
            width: 300px;
            font-size: 25px;
            margin: 0 100px;
            padding-bottom: 15px;
            background: #fff;
            border-bottom: 1px solid #000;
            &.on {
                background: #fff;
                color: #ffa70e;
                border-bottom: 5px solid #ffa70e;
                font-weight: 700;
            }
        }
    }
    .tg{
        text-align: center;
        background:#5dcf02;
        color:#fff;
        padding:15px;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border: 2px solid #ccc;
        background-color: #f9f9f9;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
   
    
    th {
        width: 100%;
        color: #fff;
        font-weight: bold;
        border-bottom: 3px solid #ccc;
        padding: 10px;
        text-align: center;
        font-family: 'Arial', sans-serif;
        display: table-cell; /* 테이블 셀로 표시 */
    }
      td {
            padding: 10px;
            text-align: center;
            font-family: 'Arial', sans-serif;
            width: 25%; /* 각 셀이 화면의 25%를 차지하도록 설정 */
        }
      
    
    tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tbody tr:hover {
        background-color: #e9e9e9;
        transition: background-color 0.3s ease;
    }
    .btn {
        text-align: center;
        margin: 20px 0; 
        a {
            padding: 10px 20px;
            background: blue;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        a:hover {
            background: #0066cc;
        }
    }
`;

const BoardList = () => {
    const [active, setActive] = useState(1);
    const handleClick = (id) => {
        setActive(id);
    };
    const menuItems = [
        { menu: '대회안내', id: 0 },
        { menu: '플레이어즈', id: 1 },
    ];

    const list = useSelector(state => state.boards.list);
    const type = useSelector(state => state.boards.type);
    const user = useSelector(state => state.members.user);

    return (
        <BoardListBlock>
            <div className="application__wrap">
                <div className="application__type">
                    {menuItems.map(item => (
                        <Link
                            key={item.id}
                            to={item.id === 0 ? '/application' : '/boardList'}
                            className={active === item.id ? 'on' : ''}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.menu}
                        </Link>
                    ))}
                </div>
                <div className='tg'>
                            플레이어즈 주니어 부문
                           
                        </div>
                <table>
                   
                    <tbody>
                        {list.length > 0 &&
                            list.map((post, index) => (
                                <tr key={index}>
                                    <td>{list.length - index}</td>
                                    <td>{post.subject}</td>
                                    <td>{post.writer}</td>
                                    <td>{dayjs(post.date).format('YYYY-MM-DD')}</td>
                                    <td>{post.hit}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {(type === "notice" && user && user.userId === "tsalt@hanmail.net") &&
                    <div className="btn">
                        <Link to="/boardWrite">신청하기</Link>
                    </div>
                }
                {(type === "review" && user) &&
                    <div className="btn">
                        <Link to="/boardWrite">신청하기</Link>
                    </div>
                }
            </div>
        </BoardListBlock>
    );
};

export default BoardList;