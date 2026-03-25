<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Shop with Categories — Slider
// Bootstrap: d-flex, position-relative
// https://getbootstrap.com/docs/5.3/utilities/flex/
// https://getbootstrap.com/docs/5.3/utilities/position/

const categories = [
  { id: 1, name: 'Computer & Laptop', img: 'https://clicon-html.netlify.app/image/product/product-9.png' },
  { id: 2, name: 'SmartPhone', img: 'https://clicon-html.netlify.app/image/product/product-10.png' },
  { id: 3, name: 'Headphones', img: 'https://clicon-html.netlify.app/image/product/product-11.png' },
  { id: 4, name: 'Accessories', img: 'https://clicon-html.netlify.app/image/product/product-12.png' },
  { id: 5, name: 'Camera & Photo', img: 'https://clicon-html.netlify.app/image/product/product-13.png' },
  { id: 6, name: 'TV & Homes', img: 'https://clicon-html.netlify.app/image/product/product-14.png' },
  { id: 7, name: 'Accessories', img: 'https://clicon-html.netlify.app/image/product/product-12.png' },
  { id: 8, name: 'Computer & Laptop', img: 'https://clicon-html.netlify.app/image/product/product-9.png' },
]

// كرر 3 مرات عشان يفضل ماشي
const infiniteCategories = [...categories, ...categories, ...categories]

const VISIBLE = 6

export default function ShopCategories() {
  const [start, setStart] = useState(0)

  const prev = () => setStart(s => Math.max(0, s - 1))

  const next = () => setStart(s => {
    if (s >= infiniteCategories.length - VISIBLE) return 0
    return s + 1
  })

  return (
    <div className="page-container py-5">

      {/*  Title  */}
      <h5 className="fw-bold text-center mb-4">Shop with Categories</h5>

      {/*  Slider
          Bootstrap: position-relative, d-flex
          https://getbootstrap.com/docs/5.3/utilities/position/  */}
      <div className="position-relative d-flex align-items-center">

        {/* Prev Button */}
        <button
          className="btn rounded-circle position-absolute d-flex align-items-center justify-content-center shadow"
          onClick={prev}
          style={{
            left: '-20px', zIndex: 10,
            width: '40px', height: '40px',
            background: '#f07b2d',
            color: '#fff', border: 'none'
          }}>←</button>

        {/* Slider Wrapper */}
        <div className="categories-wrapper">
          <div className="categories-track"
               style={{transform: `translateX(-${start * (100 / VISIBLE)}%)`}}>
            {infiniteCategories.map((cat, i) => (
              <Link
                key={i}
                to="/shop"
                className="text-decoration-none text-dark flex-shrink-0"
                style={{width: `${100 / VISIBLE}%`, padding: '0 8px'}}>
                {/* card
                    Bootstrap: border, rounded, text-center
                    https://getbootstrap.com/docs/5.3/components/card/ */}
                <div className="border rounded p-3 text-center category-card"
                     style={{transition: 'box-shadow .2s'}}>
                  <img src={cat.img} alt={cat.name}
                       className="img-fluid mb-3"
                       style={{height:'120px', objectFit:'contain'}} />
                  <p className="mb-0 fw-semibold" style={{fontSize:'.9rem'}}>{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="btn rounded-circle position-absolute d-flex align-items-center justify-content-center shadow"
          onClick={next}
          style={{
            right: '-20px', zIndex: 10,
            width: '40px', height: '40px',
            background: '#f07b2d',
            color: '#fff', border: 'none'
          }}>→</button>

      </div>
    </div>
  )
<<<<<<< HEAD
=======
=======
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Shop with Categories — Slider
// Bootstrap: d-flex, position-relative
// https://getbootstrap.com/docs/5.3/utilities/flex/
// https://getbootstrap.com/docs/5.3/utilities/position/

const categories = [
  { id: 1, name: 'Computer & Laptop', img: 'https://clicon-html.netlify.app/image/product/product-9.png' },
  { id: 2, name: 'SmartPhone', img: 'https://clicon-html.netlify.app/image/product/product-10.png' },
  { id: 3, name: 'Headphones', img: 'https://clicon-html.netlify.app/image/product/product-11.png' },
  { id: 4, name: 'Accessories', img: 'https://clicon-html.netlify.app/image/product/product-12.png' },
  { id: 5, name: 'Camera & Photo', img: 'https://clicon-html.netlify.app/image/product/product-13.png' },
  { id: 6, name: 'TV & Homes', img: 'https://clicon-html.netlify.app/image/product/product-14.png' },
  { id: 7, name: 'Accessories', img: 'https://clicon-html.netlify.app/image/product/product-12.png' },
  { id: 8, name: 'Computer & Laptop', img: 'https://clicon-html.netlify.app/image/product/product-9.png' },
]

// كرر 3 مرات عشان يفضل ماشي
const infiniteCategories = [...categories, ...categories, ...categories]

const VISIBLE = 6

export default function ShopCategories() {
  const [start, setStart] = useState(0)

  const prev = () => setStart(s => Math.max(0, s - 1))

  const next = () => setStart(s => {
    if (s >= infiniteCategories.length - VISIBLE) return 0
    return s + 1
  })

  return (
    <div className="page-container py-5">

      {/*  Title  */}
      <h5 className="fw-bold text-center mb-4">Shop with Categories</h5>

      {/*  Slider
          Bootstrap: position-relative, d-flex
          https://getbootstrap.com/docs/5.3/utilities/position/  */}
      <div className="position-relative d-flex align-items-center">

        {/* Prev Button */}
        <button
          className="btn rounded-circle position-absolute d-flex align-items-center justify-content-center shadow"
          onClick={prev}
          style={{
            left: '-20px', zIndex: 10,
            width: '40px', height: '40px',
            background: '#f07b2d',
            color: '#fff', border: 'none'
          }}>←</button>

        {/* Slider Wrapper */}
        <div className="categories-wrapper">
          <div className="categories-track"
               style={{transform: `translateX(-${start * (100 / VISIBLE)}%)`}}>
            {infiniteCategories.map((cat, i) => (
              <Link
                key={i}
                to="/shop"
                className="text-decoration-none text-dark flex-shrink-0"
                style={{width: `${100 / VISIBLE}%`, padding: '0 8px'}}>
                {/* card
                    Bootstrap: border, rounded, text-center
                    https://getbootstrap.com/docs/5.3/components/card/ */}
                <div className="border rounded p-3 text-center category-card"
                     style={{transition: 'box-shadow .2s'}}>
                  <img src={cat.img} alt={cat.name}
                       className="img-fluid mb-3"
                       style={{height:'120px', objectFit:'contain'}} />
                  <p className="mb-0 fw-semibold" style={{fontSize:'.9rem'}}>{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="btn rounded-circle position-absolute d-flex align-items-center justify-content-center shadow"
          onClick={next}
          style={{
            right: '-20px', zIndex: 10,
            width: '40px', height: '40px',
            background: '#f07b2d',
            color: '#fff', border: 'none'
          }}>→</button>

      </div>
    </div>
  )
>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
>>>>>>> 6ff25c739ae5fec161a55c178b63853d5c931cf9
}