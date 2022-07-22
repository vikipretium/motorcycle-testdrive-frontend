import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import ModelsHome from './models/models';
import AddReservations from './reservations/addreservation';
import UserReservations from './reservations/userReservations';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<ModelsHome />} />
            <Route path="addreservation" element={<AddReservations />} />
            <Route path="myreservations" element={<UserReservations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
