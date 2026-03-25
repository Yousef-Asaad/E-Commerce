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
      {/* محتوى Featured Products و Flash Sale هنا كما في الكود السابق */}
    </div>
  )
}