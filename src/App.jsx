import React from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from '@/Layout'
import HomeView from '@/views/HomeView'
import ProductView from '@/views/ProductView'
import CartView from '@/views/CartView'
import LoginView from '@/views/LoginView'
import JoinView from '@/views/JoinView'
import EventView from '@/views/EventView'

import ApplicationView from '@/views/ApplicationView';
import PlayView from '@/views/PlayView';
import CardView from '@/views/CardView';
import NewsView from '@/views/NewsView';
// import MemberModifyView from '@/views/MemberModifyView'
import BoardListView from '@/views/BoardListView'
import BoardWriteView from '@/views/BoardWriteView'
import BoardModifyView from '@/views/BoardModifyView'
import BoardDetailView from '@/views/BoardDetailView'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomeView /> } />
        <Route path="/news" element={ <NewsView />} />
        <Route path="/product" element={ <ProductView />} />
        <Route path="/cart" element={ <CartView />} />
        <Route path="/search" element={ <CardView />} />
        <Route path="/event" element={ <EventView />} />
        <Route path="/login" element={ <LoginView /> } />
        <Route path="/join" element={ <JoinView /> } />
        <Route path="/application" element={ <ApplicationView /> } />
        <Route path="/play" element={ <PlayView /> } />
        {/* <Route path="/memberModify" element={ <MemberModifyView /> } /> */}
        <Route path="/boardList" element={ <BoardListView /> } />
        <Route path="/boardWrite" element={ <BoardWriteView /> } />
        <Route path="/boardModify/:subject" element={ <BoardModifyView /> } />
        <Route path="/boardDetail/:subject" element={ <BoardDetailView /> } />
        
      </Route>
    </Routes>
  );
};

export default App;