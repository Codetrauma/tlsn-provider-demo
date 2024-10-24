import React, { ReactElement } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Body from '../../components/Body';
import { Routes, Route } from 'react-router-dom';
export default function App(): ReactElement {
  const dispatch = useDispatch();

  return (
    <div className="app flex flex-col gap-4">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </div>
  );
}
