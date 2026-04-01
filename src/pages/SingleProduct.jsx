import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
// ── Product Detail Top ──
function ProductDetailTop({ product }) {//ده بيعرض الصور و التفاصيل الأساسية للمنتج
  //
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row g-4">

        {/* Images Column */}
        <div className="col-lg-6">
          <div className="border rounded p-3 text-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="img-fluid mb-3"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />

            <div className="d-flex justify-content-center gap-2">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} thumb ${i}`}
                  className="img-thumbnail"
                  style={{
                    width: "75px",
                    height: "75px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: selectedImage === img ? "2px solid #f07b2d" : "",
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Details Column */}
        <div className="col-lg-6">
          <h3 className="fw-bold">{product.name}</h3>

          {/* Stars */}
          <div className="mb-2 d-flex align-items-center">
            {[...Array(5)].map((_, i) =>
              i < product.rating ? (
                <FaStar key={i} className="text-warning me-1" />
              ) : (
                <FaRegStar key={i} className="text-warning me-1" />
              )
            )}
            <span className="text-muted ms-2">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="text-warning fw-bold fs-4">${product.price}</span>{" "}
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {/* Options: Color */}
          {product.colors && (
            <div className="mb-3">
              <label className="form-label fw-bold">Color:</label>
              <div className="d-flex gap-2">
                {product.colors.map((c) => (
                  <div
                    key={c}
                    style={{
                      width: "25px",
                      height: "25px",
                      background: c.toLowerCase(),
                      border: "2px solid #ddd",
                      cursor: "pointer",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Options: Size */}
          {product.sizes && (
            <div className="mb-3">
              <label className="form-label fw-bold">Size:</label>
              <select className="form-select w-auto">
                {product.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity + Buttons */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="input-group" style={{ width: "120px" }}>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button className="btn btn-warning fw-bold text-white">
              Add to Cart
            </button>

            <button className="btn btn-outline-secondary">Wishlist</button>
          </div>

          {/* Quick Info */}
          <ul className="list-unstyled text-muted">
            <li><strong>SKU:</strong> {product.sku}</li>
            <li><strong>Category:</strong> {product.category}</li>
            {product.brand && <li><strong>Brand:</strong> {product.brand}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Product Detail Tabs ──
function ProductDetailTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "additional" ? "active" : ""}`}
                onClick={() => setActiveTab("additional")}
              >
                Additional Info
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({product.reviews})
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content border rounded p-4 bg-white">
            {activeTab === "description" && (
              <div>
                <p>{product.description}</p>
              </div>
            )}

            {activeTab === "additional" && (
              <div>
                <ul className="list-unstyled">
                  {product.additionalInfo?.map((item, i) => (
                    <li key={i}><strong>{item.label}:</strong> {item.value}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                {product.reviewsList?.length > 0 ? (
                  product.reviewsList.map((r, i) => (
                    <div key={i} className="mb-3 border-bottom pb-2">
                      <p className="mb-1"><strong>{r.name}</strong> – {r.date}</p>
                      <p className="mb-1">Rating: {r.rating} / 5</p>
                      <p>{r.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No reviews yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main ProductDetail Page ──
function ProductDetail() {
  const productData = {
    name: "Men Casual Shirt",
    price: 239,
    oldPrice: 299,
    rating: 4,
    reviews: 21,
    sku: "MC-1234",
    category: "Shirts",
    brand: "FashionCo",
    images: [
      "https://clicon-html.netlify.app/image/product/product-1.png",
      "https://clicon-html.netlify.app/image/product/product-2.png",
      "https://clicon-html.netlify.app/image/product/product-3.png",
    ],
    colors: ["Black", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
    description: "This men casual shirt is perfect for daily wear. Made from premium cotton for comfort and durability.",
    additionalInfo: [
      { label: "Material", value: "100% Cotton" },
      { label: "Weight", value: "300g" },
      { label: "Fit", value: "Regular" },
    ],
    reviewsList: [
      { name: "John Doe", rating: 5, date: "2026-03-01", comment: "Great quality, very comfortable!" },
      { name: "Jane Smith", rating: 4, date: "2026-02-28", comment: "Nice shirt but a bit tight on sleeves." },
    ]
  };

  return (
    <>
      <ProductDetailTop product={productData} />
      <ProductDetailTabs product={productData} />
    </>
  );
}

export default ProductDetail;