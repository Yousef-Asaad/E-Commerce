import { useState } from 'react'
import {
  FiGrid, FiShoppingBag, FiMapPin, FiShoppingCart,
  FiHeart, FiRefreshCw, FiCreditCard, FiClock,
  FiSettings, FiLogOut
} from 'react-icons/fi'

const menuItems = [
  { icon: <FiGrid />, label: 'Dashboard', id: 'dashboard' },
  { icon: <FiShoppingBag />, label: 'Order History', id: 'orders' },
  { icon: <FiMapPin />, label: 'Track Order', id: 'track' },
  { icon: <FiShoppingCart />, label: 'Shopping Cart', id: 'cart' },
  { icon: <FiHeart />, label: 'Wishlist', id: 'wishlist' },
  { icon: <FiRefreshCw />, label: 'Compare', id: 'compare' },
  { icon: <FiCreditCard />, label: 'Cards & Address', id: 'cards' },
  { icon: <FiClock />, label: 'Browsing History', id: 'purchases' },
  { icon: <FiSettings />, label: 'Setting', id: 'settings' },
]

export default function Profile() {
  const [active, setActive] = useState('settings')
  const [profile, setProfile] = useState({
    displayName: 'Kevin',
    username: '',
    fullName: 'Kevin Gilbert',
    email: 'Kevin.Gilbert@gmail.com',
    secondaryEmail: '',
    phone: '+1-202-555-0118',
    country: 'Bangladesh',
    state: 'Dhaka',
    zip: '1207',
  })

  return (
    <div className="page-container py-4">
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <div className="border rounded overflow-hidden">
            {menuItems.map(item => (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className="sidebar-item d-flex align-items-center gap-3 p-3 border-bottom"
                style={{
                  cursor: 'pointer',
                  background: active === item.id ? '#f07b2d' : '#fff',
                  color: active === item.id ? '#fff' : '#333',
                  fontSize: '.88rem'
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
            <div className="d-flex align-items-center gap-3 p-3 text-danger"
                 style={{ cursor: 'pointer', fontSize: '.88rem' }}>
              <FiLogOut />
              <span>Log out</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-lg-9">
          {/* Account Settings */}
          <div className="border rounded p-4 mb-4">
            <h6 className="fw-bold mb-4" style={{ fontSize: '.88rem', letterSpacing: '.5px' }}>
              ACCOUNT SETTING
            </h6>

            {/* Profile Photo + Form */}
            <div className="row g-3">
              <div className="col-md-2 d-flex align-items-start justify-content-center">
                <img src="https://clicon-html.netlify.app/image/avatar.png"
                     alt="Profile"
                     className="rounded-circle"
                     style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-10">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Display name</label>
                    <input type="text" className="form-control" value={profile.displayName}
                           onChange={e => setProfile({ ...profile, displayName: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Username</label>
                    <input type="text" className="form-control" placeholder="Display name"
                           value={profile.username}
                           onChange={e => setProfile({ ...profile, username: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Full Name</label>
                    <input type="text" className="form-control" value={profile.fullName}
                           onChange={e => setProfile({ ...profile, fullName: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Email</label>
                    <input type="email" className="form-control" value={profile.email}
                           onChange={e => setProfile({ ...profile, email: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Secondary Email</label>
                    <input type="text" className="form-control" value={profile.secondaryEmail}
                           onChange={e => setProfile({ ...profile, secondaryEmail: e.target.value })} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Phone Number</label>
                    <input type="text" className="form-control" value={profile.phone}
                           onChange={e => setProfile({ ...profile, phone: e.target.value })} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Country/Region</label>
                    <select className="form-select" value={profile.country}
                            onChange={e => setProfile({ ...profile, country: e.target.value })}>
                      <option>Bangladesh</option>
                      <option>India</option>
                      <option>Qatar</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>States</label>
                    <select className="form-select" value={profile.state}
                            onChange={e => setProfile({ ...profile, state: e.target.value })}>
                      <option>Dhaka</option>
                      <option>Manikganj</option>
                      <option>Uttara</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label" style={{ fontSize: '.82rem' }}>Zip Code</label>
                    <input type="text" className="form-control" value={profile.zip}
                           onChange={e => setProfile({ ...profile, zip: e.target.value })} />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-save fw-bold px-4 text-white"
                            style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}>
                      SAVE CHANGES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* باقي الصفحة تبقى كما هي... Billing, Shipping, Change Password */}
          {/* ... */}
        </div>
      </div>
    </div>
  )
}