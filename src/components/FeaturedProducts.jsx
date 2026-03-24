<<<<<<< HEAD
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const tabs = ["All Product", "Smart Phone", "Laptop", "Headphone", "TV"];

const products = [
  { id: 15, img: "https://clicon-html.netlify.app/image/product/product-15.png", badge: "HOT", badgeColor: "#dc3545", name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...", rating: 4, reviews: 738, price: "$2,300", category: "Headphone" },
  { id: 16, img: "https://clicon-html.netlify.app/image/product/product-16.png", badge: null, name: "Samsung Electronics Samsung Galaxy S21 5G", rating: 4, reviews: 536, price: "$220", category: "Smart Phone" },
  { id: 17, img: "https://clicon-html.netlify.app/image/product/product-17.png", badge: "BEST DEALS", badgeColor: "#2b6cb0", name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K)", rating: 4, reviews: 423, oldPrice: "$865", price: "$1.50", category: "TV" },
  { id: 18, img: "https://clicon-html.netlify.app/image/product/product-18.png", badge: null, name: "Portable Washing Machine, 11lbs capacity", rating: 4, reviews: 816, price: "$1,200", category: "Laptop" },
  { id: 19, img: "https://clicon-html.netlify.app/image/product/product-19.png", badge: null, name: "Wired Over-Ear Gaming Headphones with USB", rating: 4, reviews: 647, price: "$299", category: "Headphone" },
  { id: 20, img: "https://clicon-html.netlify.app/image/product/product-20.png", badge: "25% OFF", badgeColor: "#f5c518", name: "Polaroid 57-Inch Photo/Video Tripod Deluxe", rating: 4, reviews: 877, oldPrice: "$865.99", price: "$70", category: "Laptop" },
  { id: 21, img: "https://clicon-html.netlify.app/image/product/product-21.png", badge: null, name: "Dell Optiplex 7000 All-in-One Monitor", rating: 4, reviews: 426, price: "$150", category: "Laptop" },
  { id: 22, img: "https://clicon-html.netlify.app/image/product/product-22.png", badge: "SALE", badgeColor: "#dc3545", name: "4K UHD LED Smart TV with Chromecast", rating: 4, reviews: 583, oldPrice: "$360", price: "$250", category: "TV" },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All Product");
  const { addToCart, addToWish } = useCart();

  const filtered =
    activeTab === "All Product"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="container py-4">
      <div className="row g-4 align-items-stretch">

        {/* Banner */}
        <div className="col-lg-3">
          <div className="rounded overflow-hidden d-flex flex-column h-100" style={{ background: "#f5e21399" }}>
            <div className="p-3">
              <p className="fw-bold mb-1" style={{ fontSize: ".75rem", color: "#c0392b" }}>
                COMPUTER & ACCESSORIES
              </p>
              <h4 className="fw-bold mb-2">32% Discount</h4>
              <p style={{ fontSize: ".82rem" }}>For all electronics products</p>
              <p style={{ fontSize: ".78rem" }}>
                Offers ends in
                <span className="bg-white fw-bold px-2 py-1 ms-2 rounded">
                  ENDS OF CHRISTMAS
                </span>
              </p>

              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                    style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                SHOP NOW →
              </Link>
            </div>

            <div className="flex-grow-1">
              <img
                src="https://clicon-html.netlify.app/image/add/apple-accessories.png"
                alt=""
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-lg-9">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <h5 className="fw-bold">Featured Products</h5>

            <div className="d-flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="btn border-0 fw-semibold"
                  style={{
                    borderBottom:
                      activeTab === tab
                        ? "2px solid #f07b2d"
                        : "2px solid transparent",
                    color: activeTab === tab ? "#f07b2d" : "#666",
                  }}
                >
                  {tab}
                </button>
              ))}

              <Link to="/shop" className="text-decoration-none fw-semibold text-primary">
                Browse All Product →
              </Link>
            </div>
          </div>

{/* Products Grid */}
<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">

  {filtered.map((p) => (
    <div key={p.id} className="col">

      <div
  className="product-card-small border rounded p-3 h-100 position-relative"
  style={{ cursor: "pointer", background: "#fff" }}
>

        {p.badge && (
         <span
  className="badge position-absolute top-0 start-0"
  style={{
    margin: "10px",
    background: p.badgeColor,
    color: p.badgeColor === "#f5c518" ? "#000" : "#fff",
    fontSize: ".7rem",
    zIndex: 5
  }}
>
  {p.badge}
</span>
        )}

        {/* image */}
        <div className="position-relative text-center mb-2">

          <img
            src={p.img}
            alt={p.name}
            style={{ height: "150px", objectFit: "contain" }}
          />

          {/* hover icons */}
          <div className="product-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2">

            <button
              className="btn bg-white rounded-circle p-2 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                addToWish(p);
              }}
            >
              <FiHeart size={15} />
            </button>

            <button
              className="btn btn-warning rounded-circle p-2 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(p);
              }}
            >
              <FiShoppingCart size={15} />
            </button>

            <Link
              to={`/product/${p.id}`}
              className="btn bg-white rounded-circle p-2 shadow-sm"
            >
              <FiEye size={15} />
            </Link>

          </div>
        </div>

        {/* rating */}
        <div className="mb-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              style={{
                color: s <= p.rating ? "#f5c518" : "#ddd",
                fontSize: ".9rem",
              }}
            >
              ★
            </span>
          ))}
          <span className="text-muted ms-1" style={{ fontSize: ".75rem" }}>
            ({p.reviews})
          </span>
        </div>

        {/* name */}
        <p style={{ fontSize: ".8rem", lineHeight: "1.3" }}>{p.name}</p>

        {/* price */}
        <div>
          {p.oldPrice && (
            <span className="text-muted text-decoration-line-through me-2">
              {p.oldPrice}
            </span>
          )}
          <span className="fw-bold text-primary">{p.price}</span>
        </div>

      </div>

    </div>
  ))}

</div>
        </div>
      </div>

      {/* ══ Bottom Banners ══ */}
      <div className="row g-3 mt-4">
        <div className="col-lg-6">
          <div className="rounded p-4 d-flex align-items-center justify-content-between"
               style={{background:'#f5f5f5', minHeight:'180px'}}>
            <div>
              <p className="fw-bold mb-1" style={{fontSize:'.8rem', color:'#f07b2d', letterSpacing:'1px'}}>INTRODUCING</p>
              <h5 className="fw-bold mb-2">New Apple<br/>Homepod Mini</h5>
              <p className="text-muted mb-3" style={{fontSize:'.85rem'}}>Jam-packed with innovation,<br/>HomePod mini delivers unexpectedly.</p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>SHOP NOW →</Link>
            </div>
            <img src="https://clicon-html.netlify.app/image/add/soundbox.png"
                 alt="Homepod" style={{height:'150px', objectFit:'contain'}} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rounded p-4 d-flex align-items-center justify-content-between position-relative overflow-hidden"
               style={{background:'#1a1a2e', color:'#fff', minHeight:'180px'}}>
            <div style={{zIndex:1}}>
              <p className="fw-bold mb-1" style={{fontSize:'.8rem', color:'#f07b2d', letterSpacing:'1px'}}>INTRODUCING</p>
              <h5 className="fw-bold mb-2">Xiaomi Mi 11 Ultra<br/>12GB+256GB</h5>
              <p style={{fontSize:'.8rem', color:'#aaa'}}>*Data provided by internal<br/>laboratories. Industry measurement.</p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>SHOP NOW →</Link>
            </div>
            <div className="position-relative">
              <span className="badge rounded-circle bg-primary position-absolute"
                    style={{top:'-10px', right:'10px', width:'50px', height:'50px',
                            display:'flex', alignItems:'center', justifyContent:'center',
                            fontSize:'.8rem', fontWeight:'bold'}}>$299</span>
              <img src="https://clicon-html.netlify.app/image/add/mobile.png"
                   alt="Xiaomi" style={{height:'150px', objectFit:'contain'}} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const tabs = ["All Product", "Smart Phone", "Laptop", "Headphone", "TV"];

const products = [
  { id: 15, img: "https://clicon-html.netlify.app/image/product/product-15.png", badge: "HOT", badgeColor: "#dc3545", name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...", rating: 4, reviews: 738, price: "$2,300", category: "Headphone" },
  { id: 16, img: "https://clicon-html.netlify.app/image/product/product-16.png", badge: null, name: "Samsung Electronics Samsung Galaxy S21 5G", rating: 4, reviews: 536, price: "$220", category: "Smart Phone" },
  { id: 17, img: "https://clicon-html.netlify.app/image/product/product-17.png", badge: "BEST DEALS", badgeColor: "#2b6cb0", name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K)", rating: 4, reviews: 423, oldPrice: "$865", price: "$1.50", category: "TV" },
  { id: 18, img: "https://clicon-html.netlify.app/image/product/product-18.png", badge: null, name: "Portable Washing Machine, 11lbs capacity", rating: 4, reviews: 816, price: "$1,200", category: "Laptop" },
  { id: 19, img: "https://clicon-html.netlify.app/image/product/product-19.png", badge: null, name: "Wired Over-Ear Gaming Headphones with USB", rating: 4, reviews: 647, price: "$299", category: "Headphone" },
  { id: 20, img: "https://clicon-html.netlify.app/image/product/product-20.png", badge: "25% OFF", badgeColor: "#f5c518", name: "Polaroid 57-Inch Photo/Video Tripod Deluxe", rating: 4, reviews: 877, oldPrice: "$865.99", price: "$70", category: "Laptop" },
  { id: 21, img: "https://clicon-html.netlify.app/image/product/product-21.png", badge: null, name: "Dell Optiplex 7000 All-in-One Monitor", rating: 4, reviews: 426, price: "$150", category: "Laptop" },
  { id: 22, img: "https://clicon-html.netlify.app/image/product/product-22.png", badge: "SALE", badgeColor: "#dc3545", name: "4K UHD LED Smart TV with Chromecast", rating: 4, reviews: 583, oldPrice: "$360", price: "$250", category: "TV" },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All Product");
  const { addToCart, addToWish } = useCart();

  const filtered =
    activeTab === "All Product"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="container py-4">
      <div className="row g-4 align-items-stretch">

        {/* Banner */}
        <div className="col-lg-3">
          <div className="rounded overflow-hidden d-flex flex-column h-100" style={{ background: "#f5e21399" }}>
            <div className="p-3">
              <p className="fw-bold mb-1" style={{ fontSize: ".75rem", color: "#c0392b" }}>
                COMPUTER & ACCESSORIES
              </p>
              <h4 className="fw-bold mb-2">32% Discount</h4>
              <p style={{ fontSize: ".82rem" }}>For all electronics products</p>
              <p style={{ fontSize: ".78rem" }}>
                Offers ends in
                <span className="bg-white fw-bold px-2 py-1 ms-2 rounded">
                  ENDS OF CHRISTMAS
                </span>
              </p>

              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                    style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                SHOP NOW →
              </Link>
            </div>

            <div className="flex-grow-1">
              <img
                src="https://clicon-html.netlify.app/image/add/apple-accessories.png"
                alt=""
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-lg-9">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <h5 className="fw-bold">Featured Products</h5>

            <div className="d-flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="btn border-0 fw-semibold"
                  style={{
                    borderBottom:
                      activeTab === tab
                        ? "2px solid #f07b2d"
                        : "2px solid transparent",
                    color: activeTab === tab ? "#f07b2d" : "#666",
                  }}
                >
                  {tab}
                </button>
              ))}

              <Link to="/shop" className="text-decoration-none fw-semibold text-primary">
                Browse All Product →
              </Link>
            </div>
          </div>

{/* Products Grid */}
<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">

  {filtered.map((p) => (
    <div key={p.id} className="col">

      <div
  className="product-card-small border rounded p-3 h-100 position-relative"
  style={{ cursor: "pointer", background: "#fff" }}
>

        {p.badge && (
         <span
  className="badge position-absolute top-0 start-0"
  style={{
    margin: "10px",
    background: p.badgeColor,
    color: p.badgeColor === "#f5c518" ? "#000" : "#fff",
    fontSize: ".7rem",
    zIndex: 5
  }}
>
  {p.badge}
</span>
        )}

        {/* image */}
        <div className="position-relative text-center mb-2">

          <img
            src={p.img}
            alt={p.name}
            style={{ height: "150px", objectFit: "contain" }}
          />

          {/* hover icons */}
          <div className="product-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2">

            <button
              className="btn bg-white rounded-circle p-2 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                addToWish(p);
              }}
            >
              <FiHeart size={15} />
            </button>

            <button
              className="btn btn-warning rounded-circle p-2 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(p);
              }}
            >
              <FiShoppingCart size={15} />
            </button>

            <Link
              to={`/product/${p.id}`}
              className="btn bg-white rounded-circle p-2 shadow-sm"
            >
              <FiEye size={15} />
            </Link>

          </div>
        </div>

        {/* rating */}
        <div className="mb-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              style={{
                color: s <= p.rating ? "#f5c518" : "#ddd",
                fontSize: ".9rem",
              }}
            >
              ★
            </span>
          ))}
          <span className="text-muted ms-1" style={{ fontSize: ".75rem" }}>
            ({p.reviews})
          </span>
        </div>

        {/* name */}
        <p style={{ fontSize: ".8rem", lineHeight: "1.3" }}>{p.name}</p>

        {/* price */}
        <div>
          {p.oldPrice && (
            <span className="text-muted text-decoration-line-through me-2">
              {p.oldPrice}
            </span>
          )}
          <span className="fw-bold text-primary">{p.price}</span>
        </div>

      </div>

    </div>
  ))}

</div>
        </div>
      </div>

      {/* ══ Bottom Banners ══ */}
      <div className="row g-3 mt-4">
        <div className="col-lg-6">
          <div className="rounded p-4 d-flex align-items-center justify-content-between"
               style={{background:'#f5f5f5', minHeight:'180px'}}>
            <div>
              <p className="fw-bold mb-1" style={{fontSize:'.8rem', color:'#f07b2d', letterSpacing:'1px'}}>INTRODUCING</p>
              <h5 className="fw-bold mb-2">New Apple<br/>Homepod Mini</h5>
              <p className="text-muted mb-3" style={{fontSize:'.85rem'}}>Jam-packed with innovation,<br/>HomePod mini delivers unexpectedly.</p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>SHOP NOW →</Link>
            </div>
            <img src="https://clicon-html.netlify.app/image/add/soundbox.png"
                 alt="Homepod" style={{height:'150px', objectFit:'contain'}} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rounded p-4 d-flex align-items-center justify-content-between position-relative overflow-hidden"
               style={{background:'#1a1a2e', color:'#fff', minHeight:'180px'}}>
            <div style={{zIndex:1}}>
              <p className="fw-bold mb-1" style={{fontSize:'.8rem', color:'#f07b2d', letterSpacing:'1px'}}>INTRODUCING</p>
              <h5 className="fw-bold mb-2">Xiaomi Mi 11 Ultra<br/>12GB+256GB</h5>
              <p style={{fontSize:'.8rem', color:'#aaa'}}>*Data provided by internal<br/>laboratories. Industry measurement.</p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                   style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>SHOP NOW →</Link>
            </div>
            <div className="position-relative">
              <span className="badge rounded-circle bg-primary position-absolute"
                    style={{top:'-10px', right:'10px', width:'50px', height:'50px',
                            display:'flex', alignItems:'center', justifyContent:'center',
                            fontSize:'.8rem', fontWeight:'bold'}}>$299</span>
              <img src="https://clicon-html.netlify.app/image/add/mobile.png"
                   alt="Xiaomi" style={{height:'150px', objectFit:'contain'}} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
>>>>>>> 7a4ce8dd6a5e407e2d69b6276e2ce5ef1a4a4c7e
}