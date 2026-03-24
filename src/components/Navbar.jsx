import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'
import { FaTwitter, FaFacebookF, FaPinterestP, FaYoutube, FaInstagram } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { MdOutlineLocationOn, MdOutlineCompare, MdOutlineHeadsetMic, MdInfoOutline, MdPhone } from 'react-icons/md'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [search, setSearch] = useState('')
  const [showBanner, setShowBanner] = useState(true)
  const { cart, wish } = useCart()

  return (
    <>
      {/* 
        1. Black Friday Bar
        Bootstrap: d-flex, align-items-center, justify-content-between
        https://getbootstrap.com/docs/5.3/utilities/flex/
        badge: https://getbootstrap.com/docs/5.3/components/badge/
      */}
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
              <button className="btn btn-warning fw-bold px-4">SHOP NOW →</button>
              <button className="btn-close btn-close-white" onClick={() => setShowBanner(false)}></button>
            </div>
          </div>
        </div>
      )}

      {/* 
        2. Info Bar
        Bootstrap: d-flex, gap, align-items-center
        https://getbootstrap.com/docs/5.3/utilities/flex/
      */}
      <div style={{background:'#2b6cb0', color:'#fff', fontSize:'.83rem'}}>
        <div className="page-container d-flex align-items-center justify-content-between py-1">
          <span>Welcome to Clicon online eCommerce store.</span>
          <div className="d-flex align-items-center gap-3">
            <span>Follow us:</span>
            <div className="d-flex gap-2 align-items-center">
              <a href="#" className="text-white text-decoration-none"><FaTwitter /></a>
              <a href="#" className="text-white text-decoration-none"><FaFacebookF /></a>
              <a href="#" className="text-white text-decoration-none"><FaPinterestP /></a>
              <a href="#" className="text-white text-decoration-none"><FaYoutube /></a>
              <a href="#" className="text-white text-decoration-none"><FaInstagram /></a>
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

      {/*
        3. Main Bar — Logo + Search + Icons
        Bootstrap: navbar
        https://getbootstrap.com/docs/5.3/components/navbar/
        input-group: https://getbootstrap.com/docs/5.3/forms/input-group/
        position: https://getbootstrap.com/docs/5.3/utilities/position/
      */}
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

          {/* Icons
              https://getbootstrap.com/docs/5.3/utilities/position/
              badge: https://getbootstrap.com/docs/5.3/components/badge/ */}
          <div className="d-flex align-items-center gap-3 ms-auto">

            {/* Cart */}
            <Link to="/cart" className="text-white text-decoration-none position-relative">
              <FiShoppingCart size={22} />
              <span className="position-absolute badge rounded-pill bg-warning text-dark"
                    style={{top:'-8px', right:'-10px', fontSize:'.7rem'}}>
                {cart.length}
              </span>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="text-white text-decoration-none position-relative">
              <FiHeart size={22} />
              <span className="position-absolute badge rounded-pill bg-warning text-dark"
                    style={{top:'-8px', right:'-10px', fontSize:'.7rem'}}>
                {wish.length}
              </span>
            </Link>

            {/* Account */}
            <Link to="/profile" className="text-white text-decoration-none">
              <FiUser size={22} />
            </Link>

          </div>
        </div>
      </nav>

      {/* 
        4. Bottom Bar
        Bootstrap: d-flex, gap, border-bottom
        https://getbootstrap.com/docs/5.3/utilities/flex/
      */}
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
    </>
  )
}