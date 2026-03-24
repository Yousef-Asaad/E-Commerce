import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const allProducts = [
  { id: 1, name: "Men Casual Shirt", price: 239, category: "Shirts", color: "Blue", size: "M", rating: 4, image: "https://clicon-html.netlify.app/image/product/product-1.png" },
  { id: 2, name: "Running Shoes", price: 199, category: "Shoes", color: "Black", size: "L", rating: 5, image: "https://clicon-html.netlify.app/image/product/product-2.png" },
  { id: 3, name: "Smart Watch", price: 99, category: "Accessories", color: "Silver", size: "One Size", rating: 3, image: "https://clicon-html.netlify.app/image/product/product-3.png" },
  { id: 4, name: "Jeans Denim", price: 129, category: "Pants", color: "Blue", size: "M", rating: 4, image: "https://clicon-html.netlify.app/image/product/product-4.png" },
  { id: 5, name: "Leather Jacket", price: 349, category: "Jackets", color: "Black", size: "L", rating: 5, image: "https://clicon-html.netlify.app/image/product/product-5.png" },
];

const categories = ["All", "Shirts", "Shoes", "Accessories", "Pants", "Jackets"];
const colors = ["All", "Black", "Blue", "Silver", "Red"];
const sizes = ["All", "S", "M", "L", "XL"];
const ratings = [1, 2, 3, 4, 5];
const sortOptions = ["Default", "Price: Low to High", "Price: High to Low", "Rating: High to Low"];

function Shop() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop" },
  ];

  const [filters, setFilters] = useState({
    category: "All",
    color: "All",
    size: "All",
    rating: 0,
    price: [0, 500],
    sort: "Default",
  });

  const [modalProduct, setModalProduct] = useState(null);

  const filteredProducts = allProducts
    .filter(p => filters.category === "All" || p.category === filters.category)
    .filter(p => filters.color === "All" || p.color === filters.color)
    .filter(p => filters.size === "All" || p.size === filters.size)
    .filter(p => p.rating >= filters.rating)
    .filter(p => p.price >= filters.price[0] && p.price <= filters.price[1])
    .sort((a, b) => {
      if (filters.sort === "Price: Low to High") return a.price - b.price;
      if (filters.sort === "Price: High to Low") return b.price - a.price;
      if (filters.sort === "Rating: High to Low") return b.rating - a.rating;
      return 0;
    });

  const handlePriceChange = (e) => setFilters({...filters, price: [0, Number(e.target.value)]});

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <div className="border rounded p-3 mb-4">
            <h6 className="fw-bold">Category</h6>
            {categories.map(cat => (
              <button
                key={cat}
                className={`btn btn-sm w-100 mb-1 text-start ${filters.category === cat ? "btn-warning text-white" : "btn-outline-secondary"}`}
                onClick={() => setFilters({...filters, category: cat})}
              >{cat}</button>
            ))}

            <h6 className="fw-bold mt-3">Color</h6>
            {colors.map(c => (
              <button
                key={c}
                className={`btn btn-sm w-100 mb-1 text-start ${filters.color === c ? "btn-warning text-white" : "btn-outline-secondary"}`}
                onClick={() => setFilters({...filters, color: c})}
              >{c}</button>
            ))}

            <h6 className="fw-bold mt-3">Size</h6>
            {sizes.map(s => (
              <button
                key={s}
                className={`btn btn-sm w-100 mb-1 text-start ${filters.size === s ? "btn-warning text-white" : "btn-outline-secondary"}`}
                onClick={() => setFilters({...filters, size: s})}
              >{s}</button>
            ))}

            <h6 className="fw-bold mt-3">Rating</h6>
            {ratings.map(r => (
              <button
                key={r}
                className={`btn btn-sm w-100 mb-1 text-start ${filters.rating === r ? "btn-warning text-white" : "btn-outline-secondary"}`}
                onClick={() => setFilters({...filters, rating: r})}
              >{r} Stars & Up</button>
            ))}

            <h6 className="fw-bold mt-3">Price (${filters.price[0]} - ${filters.price[1]})</h6>
            <input
              type="range"
              className="form-range"
              min={0}
              max={500}
              value={filters.price[1]}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        {/* Products */}
        <div className="col-lg-9">
          <div className="d-flex justify-content-end mb-3">
            <select
              className="form-select w-auto"
              value={filters.sort}
              onChange={e => setFilters({...filters, sort: e.target.value})}
            >
              {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="row g-4">
            {filteredProducts.map(p => (
              <div key={p.id} className="col-sm-6 col-md-4 col-lg-4">
                <div className="card h-100 shadow-sm position-relative overflow-hidden">
                  <img src={p.image} className="card-img-top" alt={p.name} />
                  <div className="position-absolute top-50 start-50 translate-middle d-none card-overlay">
                    <button className="btn btn-warning btn-sm me-2" onClick={() => setModalProduct(p)}>Quick View</button>
                    <button className="btn btn-outline-light btn-sm">Add to Cart</button>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6>{p.name}</h6>
                    <p className="text-warning fw-bold">${p.price}</p>
                    <div className="d-flex">{[...Array(5)].map((_, i) => i < p.rating ? <FaStar key={i} className="text-warning me-1"/> : <FaRegStar key={i} className="text-warning me-1"/>)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled"><a className="page-link">Previous</a></li>
              <li className="page-item active"><a className="page-link">1</a></li>
              <li className="page-item"><a className="page-link">2</a></li>
              <li className="page-item"><a className="page-link">3</a></li>
              <li className="page-item"><a className="page-link">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal show={modalProduct !== null} onHide={() => setModalProduct(null)}>
        {modalProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{modalProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={modalProduct.image} alt={modalProduct.name} className="img-fluid mb-3" />
              <p className="fw-bold text-warning">${modalProduct.price}</p>
              <div className="d-flex mb-2">{[...Array(5)].map((_, i) => i < modalProduct.rating ? <FaStar key={i} className="text-warning me-1"/> : <FaRegStar key={i} className="text-warning me-1"/>)}</div>
              <p>Category: {modalProduct.category}</p>
              <p>Color: {modalProduct.color}</p>
              <p>Size: {modalProduct.size}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalProduct(null)}>Close</Button>
              <Button variant="warning">Add to Cart</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style>{`
        .card:hover .card-overlay {
          display: flex !important;
          gap: .5rem;
        }
      `}</style>
    </div>
  );
}

export default Shop;