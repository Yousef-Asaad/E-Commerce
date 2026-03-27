import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiEye, FiEyeOff } from 'react-icons/fi'
import { FaTwitter, FaFacebookF, FaPinterestP, FaYoutube, FaInstagram } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { MdOutlineLocationOn, MdOutlineCompare, MdOutlineHeadsetMic, MdInfoOutline, MdPhone } from 'react-icons/md'
import { useCart } from '../context/CartContext'

export default function Navbar() {

  const [search, setSearch] = useState('')
  const [showBanner, setShowBanner] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { cart, wish } = useCart()

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0)
  const wishCount = wish.length

  return (
    <>
      {/* Black Friday Bar */}
      {showBanner && (
        <div style={{background:'#1a1a1a', color:'#fff'}}>
          <div className="page-container d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center gap-2">
              <span className="badge px-2 py-1 fw-bold"
                    style={{background:'#f5c518', color:'#000', fontSize:'.9rem'}}>Black</span>
              <span className="fw-bold fs-5">Friday</span>
            </div>
            <div style={{fontSize:'1.1rem'}}>
              Up to <span className="fw-bold text-warning" style={{fontSize:'1.8rem'}}>59%</span> OFF
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-save fw-bold px-4 text-white"
                            style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}>SHOP NOW →</button>
              <button className="btn-close btn-close-white" onClick={() => setShowBanner(false)}></button>
            </div>
          </div>
        </div>
      )}

      {/* Info Bar */}
      <div style={{background:'#2b6cb0', color:'#fff', fontSize:'.83rem'}}>
        <div className="page-container d-flex align-items-center justify-content-between py-1">
          <span>Welcome to Clicon online eCommerce store.</span>
          <div className="d-flex align-items-center gap-3">
            <span>Follow us:</span>
            <div className="d-flex gap-2 align-items-center">
              <a href="#" className="text-white"><FaTwitter /></a>
              <a href="#" className="text-white"><FaFacebookF /></a>
              <a href="#" className="text-white"><FaPinterestP /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
            </div>
            <select className="border-0 bg-transparent text-white" style={{outline:'none', fontSize:'.83rem'}}>
              <option style={{color:'#000'}}>Eng</option>
              <option style={{color:'#000'}}>Ara</option>
            </select>
            <select className="border-0 bg-transparent text-white" style={{outline:'none', fontSize:'.83rem'}}>
              <option style={{color:'#000'}}>USD</option>
              <option style={{color:'#000'}}>EUR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{background:'#2b6cb0'}}>
        <div className="page-container d-flex align-items-center gap-3 py-3">

          {/* Logo */}
          <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 me-3">
            <span className="rounded-circle border border-white d-flex align-items-center justify-content-center"
                  style={{width:'36px', height:'36px', color:'#fff', fontWeight:'900', fontSize:'1.1rem'}}>O</span>
            <span className="fw-bold text-white" style={{fontSize:'1.4rem', letterSpacing:'2px'}}>CLICON</span>
          </Link>

          {/* Search */}
          <div className="input-group flex-grow-1 mx-auto" style={{maxWidth:'600px'}}>
            <input
              type="text"
              className="form-control border-0 py-2"
              placeholder="Search for anything..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="btn btn-light px-3 border-0">
              <FiSearch />
            </button>
          </div>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 ms-auto">

            {/* Cart */}
            <Link to="/cart" className="text-white text-decoration-none position-relative">
              <FiShoppingCart size={22} />
              <span className="position-absolute badge rounded-pill bg-warning text-dark"
                    style={{top:'-8px', right:'-10px', fontSize:'.7rem'}}>
                {cartCount}
              </span>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="text-white text-decoration-none position-relative">
              <FiHeart size={22} />
              <span className="position-absolute badge rounded-pill bg-warning text-dark"
                    style={{top:'-8px', right:'-10px', fontSize:'.7rem'}}>
                {wishCount}
              </span>
            </Link>

            {/* Profile — Login Dropdown */}
            <div className="position-relative">
              <button className="btn p-0 border-0 text-white"
                      onClick={() => setShowLogin(!showLogin)}>
                <FiUser size={22} />
              </button>

              {/* Overlay */}
              {showLogin && (
                <div className="dropdown-overlay" onClick={() => setShowLogin(false)} />
              )}

              {/* Login Form Dropdown */}
              {showLogin && (
                <div className="position-absolute bg-white rounded shadow-lg p-4"
                     style={{right:0, top:'40px', width:'300px', zIndex:1000}}>
                  <h6 className="fw-bold text-center mb-3" style={{fontSize:'.95rem'}}>
                    Sign in to your account
                  </h6>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label" style={{fontSize:'.82rem'}}>Email Address</label>
                    <input type="email" className="form-control" />
                  </div>

                  {/* Password */}
                  <div className="mb-1">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label mb-0" style={{fontSize:'.82rem'}}>Password</label>
                      <a href="#" className="text-decoration-none" style={{fontSize:'.8rem', color:'#f07b2d'}}>
                        Forget Password
                      </a>
                    </div>
                    <div className="position-relative">
                      <input type={showPassword ? 'text' : 'password'}
                             className="form-control pe-5" />
                      <button className="btn p-0 position-absolute border-0 bg-transparent"
                              style={{top:'50%', right:'12px', transform:'translateY(-50%)', color:'#999'}}
                              onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Login Button */}
                  <button className="btn btn-save w-100 fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                    LOGIN → 
                  </button>

                  {/* Create Account */}
                  <p className="text-center text-muted mb-2" style={{fontSize:'.82rem'}}>
                    Don't have account
                  </p>
                  <Link to="/signup"
                        onClick={() => setShowLogin(false)}
                        className="btn w-100 fw-bold text-decoration-none d-block text-center"
                        style={{border:'2px solid #f07b2d', color:'#f07b2d', background:'transparent'}}>
                    CREATE ACCOUNT
                  </Link>

                </div>
              )}
            </div>

          </div>
        </div>
      </nav>

      {/* Bottom Bar */}
      <div className="border-bottom bg-white">
        <div className="page-container d-flex align-items-center justify-content-between py-2">
          <div className="d-flex align-items-center gap-4">
            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1">
              <HiOutlineMenuAlt1 /> All Category ▾
            </button>
            <a href="#" className="text-dark text-decoration-none d-flex align-items-center gap-1" style={{fontSize:'.88rem'}}>
              <MdOutlineLocationOn /> Track Order
            </a>
            <a href="#" className="text-dark text-decoration-none d-flex align-items-center gap-1" style={{fontSize:'.88rem'}}>
              <MdOutlineCompare /> Compare
            </a>
            <a href="#" className="text-dark text-decoration-none d-flex align-items-center gap-1" style={{fontSize:'.88rem'}}>
              <MdOutlineHeadsetMic /> Customer Support
            </a>
            <a href="#" className="text-dark text-decoration-none d-flex align-items-center gap-1" style={{fontSize:'.88rem'}}>
              <MdInfoOutline /> Need Help
            </a>
          </div>
          <div className="d-flex align-items-center gap-2 text-dark fw-semibold" style={{fontSize:'.88rem'}}>
            <MdPhone /> +1-202-555-0104
          </div>
        </div>
      </div>
       {/* ══ Nav Links Bar — شريط جديد ══ */}
      <div className="bg-white border-bottom">
        <div className="page-container d-flex align-items-center gap-4 py-2">
          {[
            { to: '/', label: 'Home' },
            { to: '/login', label: 'Login' },
            { to: '/signup', label: 'Signup' },
            { to: '/shop', label: 'Shop' },
            { to: '/cart', label: 'Cart' },
            { to: '/wishlist', label: 'Wishlist' },
            { to: '/profile', label: 'Profile' },
            { to: '/checkout', label: 'Checkout' },
          ].map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="text-decoration-none fw-semibold"
              style={({ isActive }) => ({
                fontSize: '.88rem',
                color: isActive ? '#f07b2d' : '#333',
                borderBottom: isActive ? '2px solid #f07b2d' : '2px solid transparent',
                paddingBottom: '2px',
                transition: 'all .2s'
              })}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}