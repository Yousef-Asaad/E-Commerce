<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from 'react-icons/fi'

const slides = [
  {
    tag: 'THE BEST PLACE TO PLAY',
    title: 'Xbox Consoles',
    desc: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
    price: '$299',
    btn: 'SHOP NOW',
    img: 'https://clicon-html.netlify.app/image/banner/x-box.png',
    bg: '#f0f0f0'
  },
  {
    tag: 'THE BEST PLACE TO PLAY',
    title: 'Xbox Consoles',
    desc: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
    price: '$499',
    btn: 'SHOP NOW',
    img: 'https://clicon-html.netlify.app/image/banner/x-box.png',
    bg: '#e8f0fe'
  },
  {
    tag: 'THE BEST PLACE TO PLAY',
    title: 'Xbox Consoles',
    desc: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
    price: '$599',
    btn: 'SHOP NOW',
    img: 'https://clicon-html.netlify.app/image/banner/x-box.png',
    bg: '#fff3e0'
  }
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="page-container py-3">
      <div className="row g-3">

        {/* Slider — col-8 */}
        <div className="col-lg-8">
          <div className="position-relative rounded overflow-hidden"
               style={{background: slides[current].bg, minHeight:'380px'}}>

            <div className="row h-100 align-items-center p-4">
              {/* Text */}
              <div className="col-6">
                <p className="text-warning fw-bold mb-2" style={{fontSize:'.85rem', letterSpacing:'1px'}}>
                  — {slides[current].tag}
                </p>
                <h2 className="fw-bold mb-3" style={{fontSize:'2rem'}}>
                  {slides[current].title}
                </h2>
                <p className="text-muted mb-4" style={{fontSize:'.9rem'}}>
                  {slides[current].desc}
                </p>
                <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                      style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                  {slides[current].btn} →
                </Link>
              </div>

              {/* Image + Price */}
              <div className="col-6 text-center position-relative">
                <span className="badge rounded-circle bg-primary position-absolute"
                      style={{top:'10px', right:'30px', width:'60px', height:'60px',
                              display:'flex', alignItems:'center', justifyContent:'center',
                              fontSize:'.85rem', fontWeight:'bold'}}>
                  {slides[current].price}
                </span>
                <img src={slides[current].img} alt={slides[current].title}
                     style={{maxHeight:'280px', objectFit:'contain'}} className="img-fluid" />
              </div>
            </div>

            {/* Dots */}
            <div className="position-absolute bottom-0 start-0 p-3 d-flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                        className="border-0 rounded-circle p-0"
                        style={{width:'10px', height:'10px',
                                background: i === current ? '#333' : '#ccc'}} />
              ))}
            </div>

          </div>
        </div>

        {/* Side Banners — col-4 */}
        <div className="col-lg-4 d-flex flex-column gap-3">

          {/* Banner 1 — Google Pixel */}
          <div className="rounded overflow-hidden position-relative p-3 flex-fill"
               style={{background:'#1a1a2e', color:'#fff', minHeight:'180px'}}>
            <span className="badge bg-warning text-dark position-absolute"
                  style={{top:'12px', right:'12px', fontSize:'.75rem'}}>29% OFF</span>
            <p className="text-warning mb-1" style={{fontSize:'.8rem'}}>SUMMER SALES</p>
            <h5 className="fw-bold mb-3">New Google<br/>Pixel 6 Pro</h5>
            <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                  style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
              SHOP NOW →
            </Link>
            <img src="https://clicon-html.netlify.app/image/add/add-mobile-1.png"
              alt="Pixel 6 Pro"
                 className="position-absolute"
                 style={{bottom:'0', right:'10px', height:'160px', objectFit:'contain'}} />
          </div>

          {/* Banner 2 — Xiaomi */}
          <div className="rounded overflow-hidden position-relative p-3 flex-fill d-flex align-items-center gap-3"
               style={{background:'#f5f5f5', minHeight:'180px'}}>
            <img src="https://clicon-html.netlify.app/image/add/airpods.png"
               alt="Xiaomi FlipBuds"
                 style={{height:'120px', objectFit:'contain'}} />
            <div>
              <h5 className="fw-bold mb-1">Xiaomi<br/>FlipBuds Pro</h5>
              <p className="text-warning fw-bold mb-2">$229 USD</p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                SHOP NOW →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Features Bar */}
      <div className="row g-0 border rounded mt-3">
        {[
          { icon: <FiTruck size={28} />, title: 'Fasted Delivery', desc: 'Delivery in 24/H' },
          { icon: <FiRefreshCw size={28} />, title: '24 Hours Return', desc: '100% money-back guarantee' },
          { icon: <FiShield size={28} />, title: 'Secure Payment', desc: 'Your money is safe' },
          { icon: <FiHeadphones size={28} />, title: 'Support 24/7', desc: 'Live contact/message' },
        ].map((item, i, arr) => (
          <div key={i} className={`col-md-3 d-flex align-items-center gap-3 p-3 ${i < arr.length - 1 ? 'border-end' : ''}`}>
            <span className="text-muted">{item.icon}</span>
            <div>
              <p className="fw-bold mb-0" style={{fontSize:'.9rem'}}>{item.title}</p>
              <p className="text-muted mb-0" style={{fontSize:'.8rem'}}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
<<<<<<< HEAD
=======
=======
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from 'react-icons/fi'

const slides = [
  {
    tag: 'THE BEST PLACE TO PLAY',
    title: 'Xbox Consoles',
    desc: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
    price: '$299',
    btn: 'SHOP NOW',
    img: 'https://clicon-html.netlify.app/image/banner/x-box.png',
    bg: '#f0f0f0'
  },
  {
    tag: 'THE BEST PLACE TO PLAY',
    title: 'Xbox Consoles',
    desc: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
    price: '$499',
    btn: 'SHOP NOW',
    img: 'https://clicon-html.netlify.app/image/banner/x-box.png',
    bg: '#e8f0fe'
  },
  {
    tag: 'THE BEST PLACE TO PLAY',
    title: 'Xbox Consoles',
    desc: 'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
    price: '$599',
    btn: 'SHOP NOW',
    img: 'https://clicon-html.netlify.app/image/banner/x-box.png',
    bg: '#fff3e0'
  }
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="page-container py-3">
      <div className="row g-3">

        {/* Slider — col-8 */}
        <div className="col-lg-8">
          <div className="position-relative rounded overflow-hidden"
               style={{background: slides[current].bg, minHeight:'380px'}}>

            <div className="row h-100 align-items-center p-4">
              {/* Text */}
              <div className="col-6">
                <p className="text-warning fw-bold mb-2" style={{fontSize:'.85rem', letterSpacing:'1px'}}>
                  — {slides[current].tag}
                </p>
                <h2 className="fw-bold mb-3" style={{fontSize:'2rem'}}>
                  {slides[current].title}
                </h2>
                <p className="text-muted mb-4" style={{fontSize:'.9rem'}}>
                  {slides[current].desc}
                </p>
                <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                      style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                  {slides[current].btn} →
                </Link>
              </div>

              {/* Image + Price */}
              <div className="col-6 text-center position-relative">
                <span className="badge rounded-circle bg-primary position-absolute"
                      style={{top:'10px', right:'30px', width:'60px', height:'60px',
                              display:'flex', alignItems:'center', justifyContent:'center',
                              fontSize:'.85rem', fontWeight:'bold'}}>
                  {slides[current].price}
                </span>
                <img src={slides[current].img} alt={slides[current].title}
                     style={{maxHeight:'280px', objectFit:'contain'}} className="img-fluid" />
              </div>
            </div>

            {/* Dots */}
            <div className="position-absolute bottom-0 start-0 p-3 d-flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                        className="border-0 rounded-circle p-0"
                        style={{width:'10px', height:'10px',
                                background: i === current ? '#333' : '#ccc'}} />
              ))}
            </div>

          </div>
        </div>

        {/* Side Banners — col-4 */}
        <div className="col-lg-4 d-flex flex-column gap-3">

          {/* Banner 1 — Google Pixel */}
          <div className="rounded overflow-hidden position-relative p-3 flex-fill"
               style={{background:'#1a1a2e', color:'#fff', minHeight:'180px'}}>
            <span className="badge bg-warning text-dark position-absolute"
                  style={{top:'12px', right:'12px', fontSize:'.75rem'}}>29% OFF</span>
            <p className="text-warning mb-1" style={{fontSize:'.8rem'}}>SUMMER SALES</p>
            <h5 className="fw-bold mb-3">New Google<br/>Pixel 6 Pro</h5>
            <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                  style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
              SHOP NOW →
            </Link>
            <img src="https://clicon-html.netlify.app/image/add/add-mobile-1.png"
              alt="Pixel 6 Pro"
                 className="position-absolute"
                 style={{bottom:'0', right:'10px', height:'160px', objectFit:'contain'}} />
          </div>

          {/* Banner 2 — Xiaomi */}
          <div className="rounded overflow-hidden position-relative p-3 flex-fill d-flex align-items-center gap-3"
               style={{background:'#f5f5f5', minHeight:'180px'}}>
            <img src="https://clicon-html.netlify.app/image/add/airpods.png"
               alt="Xiaomi FlipBuds"
                 style={{height:'120px', objectFit:'contain'}} />
            <div>
              <h5 className="fw-bold mb-1">Xiaomi<br/>FlipBuds Pro</h5>
              <p className="text-warning fw-bold mb-2">$229 USD</p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                SHOP NOW →
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Features Bar */}
      <div className="row g-0 border rounded mt-3">
        {[
          { icon: <FiTruck size={28} />, title: 'Fasted Delivery', desc: 'Delivery in 24/H' },
          { icon: <FiRefreshCw size={28} />, title: '24 Hours Return', desc: '100% money-back guarantee' },
          { icon: <FiShield size={28} />, title: 'Secure Payment', desc: 'Your money is safe' },
          { icon: <FiHeadphones size={28} />, title: 'Support 24/7', desc: 'Live contact/message' },
        ].map((item, i, arr) => (
          <div key={i} className={`col-md-3 d-flex align-items-center gap-3 p-3 ${i < arr.length - 1 ? 'border-end' : ''}`}>
            <span className="text-muted">{item.icon}</span>
            <div>
              <p className="fw-bold mb-0" style={{fontSize:'.9rem'}}>{item.title}</p>
              <p className="text-muted mb-0" style={{fontSize:'.8rem'}}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
}