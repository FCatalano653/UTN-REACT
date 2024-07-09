import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './routes/register.jsx'
import Login from './routes/login.jsx'
import NotFound from './routes/NotFound.jsx'
import ArticuloDetalle from './routes/ArticuloDetalle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='articulos' >
              <Route
                index
                element={
                  <section>
                    <p> Seleccione un articulo </p>
                  </section>
                }
              />
              <Route path={':articuloId'} element={<ArticuloDetalle/>}/>
            </Route>
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
