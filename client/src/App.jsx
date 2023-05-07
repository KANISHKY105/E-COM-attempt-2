import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Favorites from './pages/Favorites'
import NewArrivals from './components/NewArrivals'
import Help from './pages/Help'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path='/help' element={<Help />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/men' element={<Men />}></Route>
          <Route path='/women' element={<Women />}></Route>
          <Route path='/kids' element={<Kids />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/fav' element={<Favorites />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
