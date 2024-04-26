import React from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from '@/Layout'
import HomeView from '@/views/HomeView'
import ProductView from '@/views/ProductView'
import ProductDetailView from '@/views/ProductDetailView'
import ProductModifyView from '@/views/ProductModifyView'
import ProductInsertView from '@/views/ProductInsertView'
import NewsView from '@/views/NewsView'
import EventView from '@/views/EventView'
import CardView from '@/views/CardView';
import LoginView from '@/views/LoginView'
import JoinView from '@/views/JoinView'
import ApplicationView from '@/views/ApplicationView';
// import MemberModifyView from '@/views/MemberModifyView'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <HomeView /> } />
        <Route path="/news" element={ <NewsView />} />
        <Route path="/product" element={ <ProductView />} />
        <Route path="/product/:id" element={ <ProductDetailView />} />
        <Route path="/productModify" element={ <ProductModifyView /> } />
        <Route path="/productInsert" element={ <ProductInsertView />} />
        <Route path="/search" element={ <CardView />} />
        <Route path="/event" element={ <EventView />} />
        <Route path="/login" element={ <LoginView /> } />
        <Route path="/join" element={ <JoinView /> } />
        <Route path="/application" element={ <ApplicationView /> } />
        {/* <Route path="/memberModify" element={ <MemberModifyView /> } /> */}
        
      </Route>
    </Routes>
  );
};

export default App;