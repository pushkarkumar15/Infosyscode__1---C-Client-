import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { Provider } from 'react-redux';
import {Notfound} from './notfound'
import {store} from './store/reducer'
import Grid from './grid'




let Router = (
  <BrowserRouter>
      <div>
        <Routes>
        <Route path="*" element={<Notfound/>} />
        <Route path="/" element={<App/>} />
        <Route path="/grid" element={<Grid/>} />
        </Routes>

      </div>
  </BrowserRouter>
)

let data2 = [{
            id: 11,
            room: 101,
            bedId: 'A',
            MealType: 'BREAKFAST',
            Status: 'INTRANSIT',
            RDT: '30 min'
}, {
  id: 12,
            room: 102,
            bedId: 'A',
            MealType: 'BREAKFAST',
            Status: 'DELIVERED',
            RDT: '30 min'

}, {
  id: 13,
            room: 103,
            bedId: 'B',
            MealType: 'BREAKFAST',
            Status: 'INPRODUCTION',
            RDT: '30 min'
}, {
  id: 14,
            room: 104,
            bedId: 'C',
            MealType: 'BREAKFAST',
            Status: 'NOTORDERED',
            RDT: '30 min'
},{
  id: 11,
  room: 105,
  bedId: 'A',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'
}, {
id: 12,
  room: 106,
  bedId: 'A',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'

}, {
id: 13,
  room: 107,
  bedId: 'B',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'
}, {
id: 14,
  room: 101,
  bedId: 'C',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'
},{
  id: 11,
  room: 101,
  bedId: 'A',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'
}, {
id: 12,
  room: 101,
  bedId: 'A',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'

}, {
id: 13,
  room: 101,
  bedId: 'B',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'
}, {
id: 14,
  room: 101,
  bedId: 'C',
  MealType: 'BREAKFAST',
  Status: 'INTRANSIT',
  RDT: '30 min'
},{
id: 11,
room: 101,
bedId: 'A',
MealType: 'BREAKFAST',
Status: 'INTRANSIT',
RDT: '30 min'
}, {
id: 12,
room: 101,
bedId: 'A',
MealType: 'BREAKFAST',
Status: 'INTRANSIT',
RDT: '30 min'

}, {
id: 13,
room: 101,
bedId: 'B',
MealType: 'BREAKFAST',
Status: 'INTRANSIT',
RDT: '30 min'
}, {
id: 14,
room: 101,
bedId: 'C',
MealType: 'BREAKFAST',
Status: 'INTRANSIT',
RDT: '30 min'
}]

localStorage.setItem('Data',JSON.stringify(data2))
let res = JSON.parse(localStorage.getItem('Data'))
console.log(res[0].id)
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
            <Provider store={store}>
            {Router}
          </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
