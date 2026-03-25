<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
const featuredProduct = {
  img: 'https://clicon-html.netlify.app/image/product/ps5.png',
  badge1: '32% OFF',
  badge2: 'HOT',
  rating: 4.5,
  reviews: 52677,
  name: 'Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...',
  oldPrice: '$865.99',
  newPrice: '$442.12',
  desc: 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.',
}

const gridProducts = [
  { id: 1, img: 'https://clicon-html.netlify.app/image/product/product-1.png', badge: 'SOLD OUT', badgeColor: '#6c757d', name: 'Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear..', price: '$2,300' },
  { id: 2, img: 'https://clicon-html.netlify.app/image/product/product-2.png', badge: null, name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$220' },
  { id: 3, img: 'https://clicon-html.netlify.app/image/product/product-3.png', badge: '19% OFF', badgeColor: '#f5c518', name: '4K UHD LED Smart TV with Chromecast Built-in', oldPrice: '$865', price: '$1,50' },
  { id: 4, img: 'https://clicon-html.netlify.app/image/product/product-4.png', badge: null, name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', price: '$1,200' },
  { id: 5, img: 'https://clicon-html.netlify.app/image/product/product-5.png', badge: null, name: 'Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear..', price: '$299' },
  { id: 6, img: 'https://clicon-html.netlify.app/image/product/product-6.png', badge: null, name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor', oldPrice: '$865.99', price: '$70' },
  { id: 7, img: 'https://clicon-html.netlify.app/image/product/product-7.png', badge: 'HOT', badgeColor: '#dc3545', name: 'Portable Wshing Machine, 11lbs capacity Model 18NMFIAM', price: '$1,50' },
  { id: 8, img: 'https://clicon-html.netlify.app/image/product/product-8.png', badge: '32% OFF', badgeColor: '#f5c518', name: '2-Barrel Carburetor Carb 2100 Engine Increase Horsepower', oldPrice: '$360', price: '$250' },
]

export default function BestDeals() {
  const { addToCart, addToWish } = useCart()
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    let total = (2 * 86400) + (12 * 3600) + (30 * 60)
    const timer = setInterval(() => {
      setTime({
        d: Math.floor(total / 86400),
        h: Math.floor((total % 86400) / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60
      })
      if (total > 0) total--
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="page-container py-4">

      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center gap-3">
          <h5 className="fw-bold mb-0">Best Deals</h5>
          <span className="text-muted" style={{ fontSize: '.85rem' }}>Deals ends in</span>
          {[`${pad(time.d)}d`, `${pad(time.h)}h`, `${pad(time.m)}m`, `${pad(time.s)}s`].map((t, i) => (
            <span key={i} className="badge fw-bold px-2 py-1"
                  style={{ background: '#f5c518', color: '#000', fontSize: '.85rem' }}>{t}</span>
          ))}
        </div>
        <Link to="/shop" className="text-decoration-none fw-semibold" style={{ color: '#2b6cb0', fontSize: '.9rem' }}>
          Browse All Product →
        </Link>
      </div>

      <div className="row g-0 border rounded overflow-hidden">

        {/* Featured Product */}
        <div className="col-lg-3 border-end p-3 d-flex flex-column justify-content-between">
          <div className="position-relative mb-3">
            <span className="badge position-absolute top-0 start-0" style={{ background: '#f5c518', color: '#000', fontSize: '.75rem' }}>{featuredProduct.badge1}</span>
            <span className="badge bg-danger position-absolute" style={{ top: '24px', left: '0', fontSize: '.75rem' }}>{featuredProduct.badge2}</span>
            <img src={featuredProduct.img} alt={featuredProduct.name} className="img-fluid d-block mx-auto" style={{ maxHeight: '200px', objectFit: 'contain' }} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-1 mb-1">
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ color: s <= 4 ? '#f5c518' : '#ddd', fontSize:'1rem' }}>★</span>
              ))}
              <span className="text-muted" style={{ fontSize: '.8rem' }}>({featuredProduct.reviews.toLocaleString()})</span>
            </div>
            <p className="fw-semibold mb-1" style={{ fontSize: '.9rem' }}>{featuredProduct.name}</p>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="text-muted text-decoration-line-through" style={{ fontSize: '.85rem' }}>{featuredProduct.oldPrice}</span>
              <span className="fw-bold text-warning" style={{ fontSize: '1.1rem' }}>{featuredProduct.newPrice}</span>
            </div>
            <p className="text-muted mb-3" style={{ fontSize: '.82rem' }}>{featuredProduct.desc}</p>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-secondary btn-sm px-3" onClick={() => addToWish(featuredProduct)}>
                <FiHeart />
              </button>
              <button className="btn btn-save fw-bold px-4 text-white"
                 style={{background:'#f07b2d', border:'2px solid #f07b2d'}} onClick={() => addToCart(featuredProduct)}>
                <FiShoppingCart className="me-1" /> ADD TO CART
              </button>
              <Link to="/product/1" className="btn btn-outline-secondary btn-sm px-3">
                <FiEye />
              </Link>
            </div>
          </div>
        </div>

       {/* Grid Products */}
<div className="col-lg-9">
  <div className="row g-0">
    {gridProducts.map((p, i) => (
      <div key={p.id}
           className={`product-card-small col-3 border-end position-relative ${i < 4 ? 'border-bottom' : ''}`}
           style={{cursor:'pointer', padding: i < 4 ? '12px 12px 24px' : '24px 12px 12px'}}>

        {p.badge && (
          <span className="badge position-absolute top-0 start-0 m-1"
                style={{background: p.badgeColor, color: p.badgeColor === '#f5c518' ? '#000' : '#fff', fontSize:'.7rem', zIndex:2}}>
            {p.badge}
          </span>
        )}

        <div className="position-relative overflow-hidden" style={{height:'100px'}}>
          <img src={p.img} alt={p.name}
               className="img-fluid d-block mx-auto"
               style={{maxHeight:'100%', objectFit:'contain'}} />
          <div className="product-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2">
            <button className="btn btn-white bg-white rounded-circle p-2 shadow-sm"
                    onClick={(e) => { e.stopPropagation(); addToWish(p) }}>
              <FiHeart size={14} />
            </button>
            <button className="btn btn-warning rounded-circle p-2 shadow-sm"
                    onClick={(e) => { e.stopPropagation(); addToCart(p) }}>
              <FiShoppingCart size={14} />
            </button>
            <Link to={`/product/${p.id}`}
                  className="btn btn-white bg-white rounded-circle p-2 shadow-sm">
              <FiEye size={14} />
            </Link>
          </div>
        </div>

        <p className="mb-1 mt-2" style={{fontSize:'.78rem', lineHeight:'1.3'}}>{p.name}</p>
        <div className="d-flex align-items-center gap-2">
          {p.oldPrice && (
            <span className="text-muted text-decoration-line-through" style={{fontSize:'.75rem'}}>{p.oldPrice}</span>
          )}
          <span className="fw-bold" style={{color:'#2b6cb0', fontSize:'.85rem'}}>{p.price}</span>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
<<<<<<< HEAD
=======
=======
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
const featuredProduct = {
  img: 'https://clicon-html.netlify.app/image/product/ps5.png',
  badge1: '32% OFF',
  badge2: 'HOT',
  rating: 4.5,
  reviews: 52677,
  name: 'Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...',
  oldPrice: '$865.99',
  newPrice: '$442.12',
  desc: 'Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.',
}

const gridProducts = [
  { id: 1, img: 'https://clicon-html.netlify.app/image/product/product-1.png', badge: 'SOLD OUT', badgeColor: '#6c757d', name: 'Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear..', price: '$2,300' },
  { id: 2, img: 'https://clicon-html.netlify.app/image/product/product-2.png', badge: null, name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$220' },
  { id: 3, img: 'https://clicon-html.netlify.app/image/product/product-3.png', badge: '19% OFF', badgeColor: '#f5c518', name: '4K UHD LED Smart TV with Chromecast Built-in', oldPrice: '$865', price: '$1,50' },
  { id: 4, img: 'https://clicon-html.netlify.app/image/product/product-4.png', badge: null, name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', price: '$1,200' },
  { id: 5, img: 'https://clicon-html.netlify.app/image/product/product-5.png', badge: null, name: 'Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear..', price: '$299' },
  { id: 6, img: 'https://clicon-html.netlify.app/image/product/product-6.png', badge: null, name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor', oldPrice: '$865.99', price: '$70' },
  { id: 7, img: 'https://clicon-html.netlify.app/image/product/product-7.png', badge: 'HOT', badgeColor: '#dc3545', name: 'Portable Wshing Machine, 11lbs capacity Model 18NMFIAM', price: '$1,50' },
  { id: 8, img: 'https://clicon-html.netlify.app/image/product/product-8.png', badge: '32% OFF', badgeColor: '#f5c518', name: '2-Barrel Carburetor Carb 2100 Engine Increase Horsepower', oldPrice: '$360', price: '$250' },
]

export default function BestDeals() {
  const { addToCart, addToWish } = useCart()
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    let total = (2 * 86400) + (12 * 3600) + (30 * 60)
    const timer = setInterval(() => {
      setTime({
        d: Math.floor(total / 86400),
        h: Math.floor((total % 86400) / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60
      })
      if (total > 0) total--
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="page-container py-4">

      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center gap-3">
          <h5 className="fw-bold mb-0">Best Deals</h5>
          <span className="text-muted" style={{ fontSize: '.85rem' }}>Deals ends in</span>
          {[`${pad(time.d)}d`, `${pad(time.h)}h`, `${pad(time.m)}m`, `${pad(time.s)}s`].map((t, i) => (
            <span key={i} className="badge fw-bold px-2 py-1"
                  style={{ background: '#f5c518', color: '#000', fontSize: '.85rem' }}>{t}</span>
          ))}
        </div>
        <Link to="/shop" className="text-decoration-none fw-semibold" style={{ color: '#2b6cb0', fontSize: '.9rem' }}>
          Browse All Product →
        </Link>
      </div>

      <div className="row g-0 border rounded overflow-hidden">

        {/* Featured Product */}
        <div className="col-lg-3 border-end p-3 d-flex flex-column justify-content-between">
          <div className="position-relative mb-3">
            <span className="badge position-absolute top-0 start-0" style={{ background: '#f5c518', color: '#000', fontSize: '.75rem' }}>{featuredProduct.badge1}</span>
            <span className="badge bg-danger position-absolute" style={{ top: '24px', left: '0', fontSize: '.75rem' }}>{featuredProduct.badge2}</span>
            <img src={featuredProduct.img} alt={featuredProduct.name} className="img-fluid d-block mx-auto" style={{ maxHeight: '200px', objectFit: 'contain' }} />
          </div>
          <div>
            <div className="d-flex align-items-center gap-1 mb-1">
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ color: s <= 4 ? '#f5c518' : '#ddd', fontSize:'1rem' }}>★</span>
              ))}
              <span className="text-muted" style={{ fontSize: '.8rem' }}>({featuredProduct.reviews.toLocaleString()})</span>
            </div>
            <p className="fw-semibold mb-1" style={{ fontSize: '.9rem' }}>{featuredProduct.name}</p>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="text-muted text-decoration-line-through" style={{ fontSize: '.85rem' }}>{featuredProduct.oldPrice}</span>
              <span className="fw-bold text-warning" style={{ fontSize: '1.1rem' }}>{featuredProduct.newPrice}</span>
            </div>
            <p className="text-muted mb-3" style={{ fontSize: '.82rem' }}>{featuredProduct.desc}</p>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-outline-secondary btn-sm px-3" onClick={() => addToWish(featuredProduct)}>
                <FiHeart />
              </button>
              <button className="btn btn-save fw-bold px-4 text-white"
                 style={{background:'#f07b2d', border:'2px solid #f07b2d'}} onClick={() => addToCart(featuredProduct)}>
                <FiShoppingCart className="me-1" /> ADD TO CART
              </button>
              <Link to="/product/1" className="btn btn-outline-secondary btn-sm px-3">
                <FiEye />
              </Link>
            </div>
          </div>
        </div>

       {/* Grid Products */}
<div className="col-lg-9">
  <div className="row g-0">
    {gridProducts.map((p, i) => (
      <div key={p.id}
           className={`product-card-small col-3 border-end position-relative ${i < 4 ? 'border-bottom' : ''}`}
           style={{cursor:'pointer', padding: i < 4 ? '12px 12px 24px' : '24px 12px 12px'}}>

        {p.badge && (
          <span className="badge position-absolute top-0 start-0 m-1"
                style={{background: p.badgeColor, color: p.badgeColor === '#f5c518' ? '#000' : '#fff', fontSize:'.7rem', zIndex:2}}>
            {p.badge}
          </span>
        )}

        <div className="position-relative overflow-hidden" style={{height:'100px'}}>
          <img src={p.img} alt={p.name}
               className="img-fluid d-block mx-auto"
               style={{maxHeight:'100%', objectFit:'contain'}} />
          <div className="product-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2">
            <button className="btn btn-white bg-white rounded-circle p-2 shadow-sm"
                    onClick={(e) => { e.stopPropagation(); addToWish(p) }}>
              <FiHeart size={14} />
            </button>
            <button className="btn btn-warning rounded-circle p-2 shadow-sm"
                    onClick={(e) => { e.stopPropagation(); addToCart(p) }}>
              <FiShoppingCart size={14} />
            </button>
            <Link to={`/product/${p.id}`}
                  className="btn btn-white bg-white rounded-circle p-2 shadow-sm">
              <FiEye size={14} />
            </Link>
          </div>
        </div>

        <p className="mb-1 mt-2" style={{fontSize:'.78rem', lineHeight:'1.3'}}>{p.name}</p>
        <div className="d-flex align-items-center gap-2">
          {p.oldPrice && (
            <span className="text-muted text-decoration-line-through" style={{fontSize:'.75rem'}}>{p.oldPrice}</span>
          )}
          <span className="fw-bold" style={{color:'#2b6cb0', fontSize:'.85rem'}}>{p.price}</span>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
}