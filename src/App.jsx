import { useState, useEffect} from 'react'
import Articulo from './Articulo'
import {Link, NavLink, Outlet, useSearchParams} from 'react-router-dom';
import logo from './assets/logo.webp';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [articulos, setArticulos] = useState([]);
  useEffect(()=>{
    fetch("https://665666719f970b3b36c542e6.mockapi.io/articulos")
    .then((res) => res.json())
    .then((data)=> setArticulos(data) );
  });
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
    <header >
      <nav style={{display:'flex'}}>
        <Link style={{borderStyle:'none'}} to={'/'}><img src={logo} 
                        style={{height:'100px'}}/>
                        </Link>

        <ul style={{ listStyle: 'none' }}>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
          <li><NavLink to='/articulos'>Articulos</NavLink></li>
        </ul>
      </nav>
      <h1> Articulos de Natura </h1>
    </header>    

    <Outlet></Outlet>

      <section>
        <FaSearch/>
        <input style={{marginLeft:'10px'}} type='search' value={searchParams.get("filter") || ""}
        onChange={(e)=>{
          let filter = e.target.value;
          if(filter)
            {
              setSearchParams({filter})
            }else{
              setSearchParams({});
            }
        }}/>
      </section>

      <section>
        <nav>
        {articulos.filter(articulo => {
          let filter = searchParams.get("filter");
          if(!filter) return true;
          let name = articulo.nombre.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
        .map((item) => <Articulo key={`${item.id}`} {...item}/>)}
        </nav>
      </section>
      
    </>
  );
}

export default App
