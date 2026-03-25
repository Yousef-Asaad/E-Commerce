import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const tabs2 = ['All Product', 'Keyboard & Mouse', 'Headphone', 'Webcam', 'Printer']

const products2 = [
  { id: 23, img: 'https://clicon-html.netlify.app/image/product/product-23.png', badge: 'BEST DEALS', badgeColor: '#2b6cb0', name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphon...', rating: 4, reviews: 994, price: '$36', category: 'Headphone' },
  { id: 24, img: 'https://clicon-html.netlify.app/image/product/product-24.png', badge: null, name: 'Samsung Electronics Samsung Galaxy S21 5G', rating: 4, reviews: 798, price: '$80', category: 'Headphone' },
  { id: 25, img: 'https://clicon-html.netlify.app/image/product/product-25.png', badge: 'HOT', badgeColor: '#dc3545', name: 'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...', rating: 4, reviews: 600, price: '$70', category: 'Keyboard & Mouse' },
  { id: 26, img: 'https://clicon-html.netlify.app/image/product/product-26.png', badge: null, name: 'Portable Wshing Machine, 11lbs capacity Model 18NMF...', rating: 4, reviews: 492, price: '$250', category: 'Printer' },
  { id: 27, img: 'https://clicon-html.netlify.app/image/product/product-27.png', badge: null, name: 'Wired Over-Ear Gaming Headphones with USB', rating: 4, reviews: 740, price: '$2300', category: 'Headphone' },
  { id: 28, img: 'https://clicon-html.netlify.app/image/product/product-28.png', badge: 'SALE', badgeColor: '#dc3545', name: 'Polaroid 57-Inch Photo/Video Tripod Deluxe Tripod Ca...', rating: 3, reviews: 556, price: '$220', category: 'Webcam' },
  { id: 29, img: 'https://clicon-html.netlify.app/image/product/product-29.png', badge: null, name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor', rating: 3, reviews: 426, price: '$1,50', category: 'Printer' },
  { id: 30, img: 'https://clicon-html.netlify.app/image/product/product-30.png', badge: '25% OFF', badgeColor: '#f5c518', name: '4K UHD LED Smart TV with Chromecast Built-in', rating: 4, reviews: 583, oldPrice: '$360', price: '$250', category: 'Webcam' },
]

const flashSections = [
  { title: 'FLASH SALE TODAY', products: [
    { id: 31, img: 'https://clicon-html.netlify.app/image/product/product-31.png', name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...', price: '$1,500' },
    { id: 32, img: 'https://clicon-html.netlify.app/image/product/product-32.png', name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$1,500' },
    { id: 33, img: 'https://clicon-html.netlify.app/image/product/product-33.png', name: '4K UHD LED Smart TV with Chromecast Built-in', price: '$1,500' },
  ]},
  { title: 'BEST SELLERS', products: [
    { id: 34, img: 'https://clicon-html.netlify.app/image/product/product-34.png', name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...', price: '$1,500' },
    { id: 35, img: 'https://clicon-html.netlify.app/image/product/product-35.png', name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$1,500' },
    { id: 36, img: 'https://clicon-html.netlify.app/image/product/product-36.png', name: '4K UHD LED Smart TV with Chromecast Built-in', price: '$1,500' },
  ]},
  { title: 'FLASH SALE TODAY', products: [
    { id: 37, img: 'https://clicon-html.netlify.app/image/product/product-37.png', name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...', price: '$1,500' },
    { id: 38, img: 'https://clicon-html.netlify.app/image/product/product-38.png', name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$1,500' },
    { id: 39, img: 'https://clicon-html.netlify.app/image/product/product-39.png', name: '4K UHD LED Smart TV with Chromecast Built-in', price: '$1,500' },
  ]},
  { title: 'FLASH SALE TODAY', products: [
    { id: 40, img: 'https://clicon-html.netlify.app/image/product/product-40.png', name: 'Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...', price: '$1,500' },
    { id: 41, img: 'https://clicon-html.netlify.app/image/product/product-41.png', name: 'Simple Mobile 4G LTE Prepaid Smartphone', price: '$1,500' },
    { id: 42, img: 'https://clicon-html.netlify.app/image/product/product-42.png', name: '4K UHD LED Smart TV with Chromecast Built-in', price: '$1,500' },
  ]},
]

export default function FeaturedProducts2() {
  const [activeTab, setActiveTab] = useState('All Product')
  const { addToCart, addToWish } = useCart()

  const filtered = activeTab === 'All Product'
    ? products2
    : products2.filter(p => p.category === activeTab)

  return (
    <div className="page-container py-4">

      {/* Featured Products 2 */}
      <div className="row g-3">

        {/* Products Grid — col-9 */}
        <div className="col-lg-9">
          <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
            <h5 className="fw-bold mb-0">Featured Products</h5>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              {tabs2.map(tab => (
                <button key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="btn btn-sm px-0 border-0 fw-semibold"
                        style={{
                          color: activeTab === tab ? '#f07b2d' : '#666',
                          borderBottom: activeTab === tab ? '2px solid #f07b2d' : '2px solid transparent',
                          borderRadius: 0, fontSize: '.88rem'
                        }}>
                  {tab}
                </button>
              ))}
              <Link to="/shop" className="text-decoration-none fw-semibold"
                    style={{color:'#2b6cb0', fontSize:'.88rem'}}>
                Browse All Product →
              </Link>
            </div>
          </div>

          <div className="row g-3">
            {filtered.map((p) => (
              <div key={p.id} className="col-3 product-card-small" style={{cursor:'pointer'}}>
                <div className="border rounded p-3 h-100 position-relative">
                  {p.badge && (
                    <span className="badge position-absolute top-0 start-0 m-2"
                          style={{background: p.badgeColor, color: p.badgeColor === '#f5c518' ? '#000' : '#fff', fontSize:'.7rem', zIndex:2}}>
                      {p.badge}
                    </span>
                  )}
                  <div className="position-relative overflow-hidden mb-2" style={{height:'120px'}}>
                    <img src={p.img} alt={p.name}
                         className="d-block mx-auto h-100"
                         style={{objectFit:'contain'}} />
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
                  <div className="d-flex align-items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{color: s <= p.rating ? '#f5c518' : '#ddd', fontSize:'.8rem'}}>★</span>
                    ))}
                    <span className="text-muted" style={{fontSize:'.75rem'}}>({p.reviews})</span>
                  </div>
                  <p className="mb-1" style={{fontSize:'.78rem', lineHeight:'1.3'}}>{p.name}</p>
                  <div className="d-flex align-items-center gap-2">
                    {p.oldPrice && (
                      <span className="text-muted text-decoration-line-through" style={{fontSize:'.75rem'}}>{p.oldPrice}</span>
                    )}
                    <span className="fw-bold" style={{color:'#2b6cb0', fontSize:'.85rem'}}>{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Side Banners — col-3 ══ */}
        <div className="col-lg-3 d-flex flex-column gap-3">
          {/* Banner 1 */}
          <div className="rounded p-3 text-center flex-grow-1"
               style={{background:'#f1d05a9d'}}>
            <img src="https://clicon-html.netlify.app/image/add/airpod-02.png"
                 alt="Earbuds" className="img-fluid mb-2" style={{height:'120px', objectFit:'contain'}} />
            <h6 className="fw-bold mb-1">Xiaomi True<br/>Wireless Earbuds</h6>
            <p className="text-muted mb-2" style={{fontSize:'.8rem'}}>
              Escape the noise, It's time to hear the magic with Xiaomi Earbuds.
            </p>
            <p className="mb-2" style={{fontSize:'.82rem'}}>
              Only for: <span className="border rounded px-2 py-1 fw-bold"
                              style={{fontSize:'.75rem'}}>$299 USD</span>
            </p>
            <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
        style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
              SHOP NOW →
            </Link>
          </div>

          {/* Banner 2 */}
          <div className="rounded p-3 text-white flex-grow-1"
               style={{background:'#0202a5eb'}}>
            <p className="fw-bold mb-1" style={{fontSize:'.75rem', color:'#f07b2d', letterSpacing:'1px'}}>
              SUMMER SALES
            </p>
            <h4 className="fw-bold mb-1 text-white">37% DISCOUNT</h4>
            <p className="mb-3" style={{fontSize:'.85rem'}}>
              only for <span className="text-warning fw-bold">SmartPhone</span> product.
            </p>
            <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
              SHOP NOW →
            </Link>
          </div>
        </div>

      </div>

{/* Flash Sale + Best Sellers */}
<div className="row g-3 mt-4">
  {flashSections.map((section, si) => (
    <div key={si} className="col-lg-3">
      {/* العنوان بدون border */}
      <h6 className="fw-bold mb-2" style={{fontSize:'.88rem'}}>{section.title}</h6>
      {/* كل منتج في card منفصل */}
      <div className="d-flex flex-column gap-2">
        {section.products.map((p) => (
          <div key={p.id}
               className="flash-card border rounded d-flex align-items-center gap-2 p-2"
               style={{cursor:'pointer'}}>
            <img src={p.img} alt={p.name}
                 style={{width:'60px', height:'60px', objectFit:'contain', flexShrink:0}} />
            <div>
              <p className="mb-1" style={{fontSize:'.78rem', lineHeight:'1.3'}}>{p.name}</p>
              <span className="fw-bold" style={{color:'#2b6cb0', fontSize:'.85rem'}}>{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  )
}