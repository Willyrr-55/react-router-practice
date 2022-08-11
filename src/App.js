import { Route, Routes, Link, useParams, Outlet} from 'react-router-dom';
import './App.css';

const Home = () => <h1>Home</h1>
const SearchPage = () => {
  const hamburguesas = [
    'Teriyaki',
    'Steak Burger',
    'Especial',
    'Mealt'
  ];
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        
            {hamburguesas.map( hambur => (
              <li><Link key={hambur} to={`/hamburguesas/${hambur}`}>{hambur}</Link> </li>
            ))}
       
      </ul>
      
    </div>
  )
}

const Hamburguers = () => {
  const { nameHamburguer } = useParams();
  return (
    <div>
      <h1>Hamburguesa {nameHamburguer}</h1>
      <Link to='details' >Ir al detalle</Link>
      <Outlet/>
    </div>
  
    )

}

const HamburguerDetail = () => {
  const {nameHamburguer} = useParams();
  
  return (
    <h1>Hamburguesa Details {nameHamburguer}</h1>
  )
}

function App() {
  return ( 
    <div className="App">
      <header>
        <h1>Ecommerce</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Search Page</Link></li>
          </ul>
        </nav>  
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage/>} />
        <Route path='/hamburguesas/:nameHamburguer' element={<Hamburguers />}>
          <Route path='details' element={<HamburguerDetail />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
