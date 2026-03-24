<<<<<<< HEAD
import { Link } from 'react-router-dom'

// Footer
// Bootstrap: row, col, d-flex
// https://getbootstrap.com/docs/5.3/layout/grid/

const tags = ['Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook', 'SSD', 'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker', 'Tablet', 'Microwave', 'Samsung']

export default function Footer() {
  return (
    <footer style={{background:'#000000'}} className="py-5">
      <div className="page-container">
        <div className="row g-4 pb-4 border-bottom border-secondary">

          {/* Col 1 — Logo + Info */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="rounded-circle border border-warning d-flex align-items-center justify-content-center"
                    style={{width:'36px', height:'36px', color:'#f07b2d', fontWeight:'900', fontSize:'1.1rem'}}>O</span>
              <span className="fw-bold text-white" style={{fontSize:'1.4rem', letterSpacing:'2px'}}>CLICON</span>
            </div>
            <p className="text-secondary mb-1" style={{fontSize:'.85rem'}}>Customer Supports:</p>
            <p className="text-white fw-bold mb-1" style={{fontSize:'1.1rem'}}>(629) 555-0129</p>
            <p className="text-secondary mb-1" style={{fontSize:'.85rem'}}>4517 Washington Ave.<br/>Manchester, Kentucky 39495</p>
            <p className="text-white fw-bold" style={{fontSize:'.85rem'}}>info@clicon.com</p>
          </div>

          {/* Col 2 — Top Category */}
          <div className="col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>TOP CATEGORY</h6>
            <ul className="list-unstyled">
              {['Computer & Laptop', 'SmartPhone', 'Headphone', 'Accessories', 'Camera & Photo', 'TV & Homes'].map(item => (
                <li key={item} className="mb-2">
                  <Link to="/shop" className="text-secondary text-decoration-none"
                        style={{fontSize:'.85rem'}}>{item}</Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="fw-bold text-decoration-none"
                      style={{color:'#f07b2d', fontSize:'.85rem'}}>Browse All Product →</Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>QUICK LINKS</h6>
            <ul className="list-unstyled">
              {['Shop Product', 'Shoping Cart', 'Wishlist', 'Compare', 'Track Order', 'Customer Help', 'About Us'].map(item => (
                <li key={item} className="mb-2">
                  <Link to="#" className="text-secondary text-decoration-none"
                        style={{fontSize:'.85rem'}}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Download App */}
          <div className="col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>DOWNLOAD APP</h6>
            {/* Google Play */}
            <div className="border border-secondary rounded p-2 d-flex align-items-center gap-2 mb-2"
                 style={{cursor:'pointer'}}>
              <span style={{fontSize:'1.5rem'}}>▶</span>
              <div>
                <p className="text-secondary mb-0" style={{fontSize:'.7rem'}}>Get it now</p>
                <p className="text-white fw-bold mb-0" style={{fontSize:'.85rem'}}>Google Play</p>
              </div>
            </div>
            {/* App Store */}
            <div className="border border-secondary rounded p-2 d-flex align-items-center gap-2"
                 style={{cursor:'pointer'}}>
              <span style={{fontSize:'1.5rem'}}>🍎</span>
              <div>
                <p className="text-secondary mb-0" style={{fontSize:'.7rem'}}>Get it now</p>
                <p className="text-white fw-bold mb-0" style={{fontSize:'.85rem'}}>App Store</p>
              </div>
            </div>
          </div>

          {/* Col 5 — Popular Tags */}
          <div className="col-lg-3">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>POPULAR TAG</h6>
            <div className="d-flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link key={tag} to="/shop"
                      className="text-secondary text-decoration-none border border-secondary rounded px-2 py-1"
                      style={{fontSize:'.8rem'}}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-4">
          <p className="text-secondary mb-0" style={{fontSize:'.82rem'}}>
            Clicon - eCommerce Template © 2021. Design by Templatecookie
          </p>
        </div>

      </div>
    </footer>
  )
=======
import { Link } from 'react-router-dom'

// Footer
// Bootstrap: row, col, d-flex
// https://getbootstrap.com/docs/5.3/layout/grid/

const tags = ['Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook', 'SSD', 'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker', 'Tablet', 'Microwave', 'Samsung']

export default function Footer() {
  return (
    <footer style={{background:'#000000'}} className="py-5">
      <div className="page-container">
        <div className="row g-4 pb-4 border-bottom border-secondary">

          {/* Col 1 — Logo + Info */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="rounded-circle border border-warning d-flex align-items-center justify-content-center"
                    style={{width:'36px', height:'36px', color:'#f07b2d', fontWeight:'900', fontSize:'1.1rem'}}>O</span>
              <span className="fw-bold text-white" style={{fontSize:'1.4rem', letterSpacing:'2px'}}>CLICON</span>
            </div>
            <p className="text-secondary mb-1" style={{fontSize:'.85rem'}}>Customer Supports:</p>
            <p className="text-white fw-bold mb-1" style={{fontSize:'1.1rem'}}>(629) 555-0129</p>
            <p className="text-secondary mb-1" style={{fontSize:'.85rem'}}>4517 Washington Ave.<br/>Manchester, Kentucky 39495</p>
            <p className="text-white fw-bold" style={{fontSize:'.85rem'}}>info@clicon.com</p>
          </div>

          {/* Col 2 — Top Category */}
          <div className="col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>TOP CATEGORY</h6>
            <ul className="list-unstyled">
              {['Computer & Laptop', 'SmartPhone', 'Headphone', 'Accessories', 'Camera & Photo', 'TV & Homes'].map(item => (
                <li key={item} className="mb-2">
                  <Link to="/shop" className="text-secondary text-decoration-none"
                        style={{fontSize:'.85rem'}}>{item}</Link>
                </li>
              ))}
              <li>
                <Link to="/shop" className="fw-bold text-decoration-none"
                      style={{color:'#f07b2d', fontSize:'.85rem'}}>Browse All Product →</Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>QUICK LINKS</h6>
            <ul className="list-unstyled">
              {['Shop Product', 'Shoping Cart', 'Wishlist', 'Compare', 'Track Order', 'Customer Help', 'About Us'].map(item => (
                <li key={item} className="mb-2">
                  <Link to="#" className="text-secondary text-decoration-none"
                        style={{fontSize:'.85rem'}}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Download App */}
          <div className="col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>DOWNLOAD APP</h6>
            {/* Google Play */}
            <div className="border border-secondary rounded p-2 d-flex align-items-center gap-2 mb-2"
                 style={{cursor:'pointer'}}>
              <span style={{fontSize:'1.5rem'}}>▶</span>
              <div>
                <p className="text-secondary mb-0" style={{fontSize:'.7rem'}}>Get it now</p>
                <p className="text-white fw-bold mb-0" style={{fontSize:'.85rem'}}>Google Play</p>
              </div>
            </div>
            {/* App Store */}
            <div className="border border-secondary rounded p-2 d-flex align-items-center gap-2"
                 style={{cursor:'pointer'}}>
              <span style={{fontSize:'1.5rem'}}>🍎</span>
              <div>
                <p className="text-secondary mb-0" style={{fontSize:'.7rem'}}>Get it now</p>
                <p className="text-white fw-bold mb-0" style={{fontSize:'.85rem'}}>App Store</p>
              </div>
            </div>
          </div>

          {/* Col 5 — Popular Tags */}
          <div className="col-lg-3">
            <h6 className="fw-bold text-white mb-3" style={{fontSize:'.85rem', letterSpacing:'.5px'}}>POPULAR TAG</h6>
            <div className="d-flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link key={tag} to="/shop"
                      className="text-secondary text-decoration-none border border-secondary rounded px-2 py-1"
                      style={{fontSize:'.8rem'}}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-4">
          <p className="text-secondary mb-0" style={{fontSize:'.82rem'}}>
            Clicon - eCommerce Template © 2021. Design by Templatecookie
          </p>
        </div>

      </div>
    </footer>
  )
>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
}