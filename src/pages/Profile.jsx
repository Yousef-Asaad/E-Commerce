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
{/* ── Billing + Shipping Address ── */}
            <div className="row g-4 mb-4">
              {['BILLING ADDRESS', 'SHIPPING ADDRESS'].map(type => (
                <div key={type} className="col-md-6">
                  <div className="border rounded p-4">
                    <h6 className="fw-bold mb-4" style={{fontSize:'.88rem', letterSpacing:'.5px'}}>{type}</h6>
                    <div className="row g-3">
                      <div className="col-6">
                        <label className="form-label" style={{fontSize:'.82rem'}}>First Name</label>
                        <input type="text" className="form-control" defaultValue="Kevin" />
                      </div>
                      <div className="col-6">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Last Name</label>
                        <input type="text" className="form-control" defaultValue="Gilbert" />
                      </div>
                      <div className="col-12">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Company Name (Optional)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-12">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Address</label>
                        <input type="text" className="form-control"
                               defaultValue="Road No. 13/x, Housenex: 1322C, Plot No. 98" />
                      </div>
                      <div className="col-12">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Country</label>
                        <select className="form-select">
                          <option>Bangladesh</option>
                          <option>India</option>
                          <option>Qatar</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Region/State</label>
                        <select className="form-select">
                          <option>Dhaka</option>
                          <option>Manikganj</option>
                          <option>Uttara</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <label className="form-label" style={{fontSize:'.82rem'}}>City</label>
                        <input type="text" className="form-control" defaultValue="Dhaka" />
                      </div>
                      <div className="col-6">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Zip Code</label>
                        <input type="text" className="form-control" defaultValue="1207" />
                      </div>
                      <div className="col-12">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Email</label>
                        <input type="email" className="form-control" defaultValue="kevin1234@gmail.com" />
                      </div>
                      <div className="col-12">
                        <label className="form-label" style={{fontSize:'.82rem'}}>Phone Number</label>
                        <input type="text" className="form-control" defaultValue="+1-906-555-0148" />
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
              ))}
            </div>

            {/* ── Change Password ── */}
            <div className="border rounded p-4">
              <h6 className="fw-bold mb-4" style={{fontSize:'.88rem', letterSpacing:'.5px'}}>
                CHANGE PASSWORD
              </h6>
              <div className="row g-3" style={{maxWidth:'500px'}}>
                <div className="col-12">
                  <label className="form-label" style={{fontSize:'.82rem'}}>Current Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{fontSize:'.82rem'}}>New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{fontSize:'.82rem'}}>Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-12">
                  <button className="btn btn-save fw-bold px-4 text-white"
                            style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}>
                    CHANGE PASSWORD
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}