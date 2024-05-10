import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import { changeType, fetchNotice, fetchReview } from '@/store/board';
import dayjs from 'dayjs'



const BoardListBlock = styled.div`
    margin: 0px 0 50px; 
    .application__type {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #000;
        margin-bottom: 50px;
        li{ 
            list-style:none;
        a {
            text-align: center;
            width: 300px;
            font-size: 25px;
            margin: 0 100px;
            padding-bottom: 15px;
            background: #fff;
            border-bottom: 0px solid #000;
            &.on {
                background: #fff;
                color: #ffa70e;
                border-bottom: 5px solid #ffa70e;
                font-weight: 700;
            }
        }
    }
    }
    .tg{
        margin-top:50px; 
        text-align: center;
        background:#5dcf02;
        color:#fff;
        padding:15px;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }
    .tg2{
        text-align: center;
        background:#04a6e2;
        color:#fff;
        padding:15px;
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }
    .tg3{
        text-align: center;
        background:#ff3636;
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
             font-weight:600;

           &:nth-child(4) a{
                background-color: #FFDE00;
                padding: 9px 22px;
                border-radius:30px;
            }
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
        margin: 40px 0; 
        a {
            padding: 10px 20px;
            background: #000;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        a:hover {
            background: #ffa70e;
        }




       
       
    }
    @media (max-width:768px) {
        margin: 0px 0 50px; 
        .application__type {
            margin-top:34px;
            display: flex;
            justify-content: center;
            border-bottom:1px solid #000;
            li{list-style:none;
              width:49%;
              
            a {
         
              width:95%;
              font-size:25px;
              margin:0 5px;
              padding-bottom: 10px;
            
              background:#fff;
              border-bottom:0px solid #000;
              &.on {
                  background:#fff;
                  color:#ffa70e;
                  border-bottom:5px solid #ffa70e;
                  font-weight:700;
                 
              }
          }
            }
        }
        .tg{
            margin-top:50px; 
            text-align: center;
            background:#5dcf02;
            color:#fff;
            padding:15px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
        }
        .tg2{
            text-align: center;
            background:#04a6e2;
            color:#fff;
            padding:15px;
            font-family: 'Arial', sans-serif;
            font-weight: bold;
        }
        .tg3{
            text-align: center;
            background:#ff3636;
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
        tr{
            
          td {
                padding: 5px;
                text-align: center;
                font-family: 'Arial', sans-serif;
                width: 0%; /* 각 셀이 화면의 25%를 차지하도록 설정 */
                 font-weight:600;
                 font-size: 13px;

                 &:nth-child(2) {
                    text-align: left;
                }
                &:nth-child(3) {
                    text-align: left;
                }
                &:nth-child(4) {
                    text-align: right;
                }
    
               &:nth-child(4) a{
                    background-color: #FFDE00;
                    padding: 9px 6px;
                    border-radius:30px;
                }
            }
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
            margin: 40px 0; 
            a {
                padding: 10px 20px;
                background: #000;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }
            a:hover {
                background: #ffa70e;
            }
    
    
    
    
           
           
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

    const dispatch = useDispatch()
    const list = useSelector(state=>state.boards.list)
    const type = useSelector(state=>state.boards.type)
    const user = useSelector(state=>state.members.user)
    
    const [actList1, setActList1] = useState([])
    const [actList2, setActList2] = useState([])

      useEffect(()=>{
        if (type=="관리자") {
            dispatch(changeType("관리자"))
            dispatch(fetchNotice())
           
        } else{
            dispatch(changeType("유저"))
            dispatch(fetchReview())
            setActList1(list.filter((item)=>item.birthday>=2010))
            setActList2(list.filter((item)=>item.birthday<2010))
        }

   },[type, dispatch, list])

   

    return (
        <BoardListBlock>
            <div className="application__wrap">
                <div className="application__type">
                    {menuItems.map(item => (
                     <li>
                            <Link
                                key={item.id}
                                to={item.id === 0 ? '/application' : '/boardList'}
                                className={active === item.id ? 'on' : ''}
                                onClick={() => handleClick(item.id)}
                            >
                                {item.menu}
                            </Link>
                     </li>
                    ))}
                </div>
                
                
                { type=="관리자" &&
                 <>
              <div className='tg3'>
                관리자 작성
               
                </div>
                <table>
                    <tbody>
                        {   list.length>0 &&
                            list.map((post, index)=>(
                                <tr key={index}>
                                    <td>{list.length - index}</td>
                                    <td><Link to={`/boardDetail/${post.subject}`} state={{post:post}}>{post.subject}</Link></td>
                                    {/* <td>{post.writer}</td> */}
                                    <td>{post.content}</td>
                                    <td>{dayjs(post.date).format('YYYY-MM-DD')}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                 </>
                }
                { type=="유저" &&
                <>
                <div className='tg'>
                코리안리그 주니어 부문
               
                </div>
                <table>
                     <tbody>
                        {   actList1.length>0 &&
                            actList1.map((post, index)=>(
                                <tr key={index}>
                                    <td>{actList1.length - index}</td>
                                    <td><Link to={`/boardDetail/${post.subject}`} state={{post:post}}>{post.subject}</Link></td>
                                    <td>{post.writer}</td>
                                    {/* <td>{post.content}</td> */}
                                    <td className='deck-link'><Link to={`/deck/${post.subject}`} state={{ post: post }}>{post.subject}덱보기</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </>
                }

                { type=="유저" &&
                <>
                <div className='tg2'>
                코리안리그 시니어 부문
               
                </div>
                <table>
                     <tbody>
                        {   actList2.length>0 &&
                            actList2.map((post, index)=>(
                                <tr key={index}>
                                    <td>{actList2.length - index}</td>
                                    <td><Link to={`/boardDetail/${post.subject}`} state={{post:post}}>{post.subject}</Link></td>
                                    <td>{post.writer}</td>
                                    {/* <td>{post.content}</td> */}
                                    <td className='deck-link'><Link to={`/deck/${post.subject}`} state={{ post: post }}>{post.subject}덱보기</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </>
                }



                {(type === "관리자" && user && user.userId === "tsalt@hanmail.net") &&
                    <div className="btn">
                        <Link to="/boardWrite">작성하기</Link>
                    </div>
                }
                {
                (type === "유저" && user) &&
                    <div className="btn">
                        <Link to="/boardWrite">신청하기</Link>
                    </div>
                }
            </div>


        
        </BoardListBlock>
    );
};

export default BoardList;