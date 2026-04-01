import { useState, useEffect } from 'react';
import {
  FiGrid, FiShoppingBag, FiMapPin, FiShoppingCart,
  FiHeart, FiRefreshCw, FiCreditCard, FiClock,
  FiSettings, FiLogOut
} from 'react-icons/fi';
import API from '../services/api';

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
];

export default function Profile() {

  const [active, setActive] = useState('settings');

  const [profile, setProfile] = useState({
    displayName: '',
    username: '',
    fullName: '',
    email: '',
    secondaryEmail: '',
    phone: '',
    country: '',
    state: '',
    zip: ''
  });

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {

      API.get('/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {

          setProfile({
            displayName: res.data.name,
            fullName: res.data.name,
            email: res.data.email,
            username: res.data.username || '',
            phone: res.data.phone || '',
            country: res.data.country || '',
            state: res.data.state || '',
            zip: res.data.zip || ''
          });

        })
        .catch(err => console.log(err));

    }

  }, []);

  const handleSaveAccount = () => {
    console.log('Account info saved:', profile);
  };

  const handleSaveAddress = () => {
    console.log('Billing/Shipping saved');
  };

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

            <div
              className="d-flex align-items-center gap-3 p-3 text-danger"
              style={{ cursor: 'pointer', fontSize: '.88rem' }}
            >
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
              ACCOUNT SETTINGS
            </h6>

            <div className="row g-3">

              <div className="col-md-2 d-flex align-items-start justify-content-center">
                <img
                  src="https://clicon-html.netlify.app/image/avatar.png"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </div>

              <div className="col-md-10">

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Display name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profile.displayName}
                      onChange={(e) =>
                        setProfile({ ...profile, displayName: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profile.fullName}
                      onChange={(e) =>
                        setProfile({ ...profile, fullName: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-12 mt-3">
                    <button
                      className="btn btn-save fw-bold px-4 text-white"
                      style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}
                      onClick={handleSaveAccount}
                    >
                      SAVE CHANGES
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Billing & Shipping */}
          <div className="row g-4 mb-4">

            {['BILLING ADDRESS', 'SHIPPING ADDRESS'].map(type => (

              <div key={type} className="col-md-6">

                <div className="border rounded p-4">

                  <h6 className="fw-bold mb-4" style={{ fontSize: '.88rem', letterSpacing: '.5px' }}>
                    {type}
                  </h6>

                  <div className="row g-3">

                    <div className="col-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.displayName}
                        readOnly
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.fullName}
                        readOnly
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={profile.email}
                        readOnly
                      />
                    </div>

                    <div className="col-12 mt-3">
                      <button
                        className="btn btn-save fw-bold px-4 text-white"
                        style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}
                        onClick={handleSaveAddress}
                      >
                        SAVE CHANGES
                      </button>
                    </div>

                  </div>
                </div>

              </div>

            ))}

          </div>

          {/* Change Password */}
          <div className="border rounded p-4">

            <h6 className="fw-bold mb-4" style={{ fontSize: '.88rem', letterSpacing: '.5px' }}>
              CHANGE PASSWORD
            </h6>

            <div className="row g-3" style={{ maxWidth: '500px' }}>

              <div className="col-12">
                <label className="form-label">Current Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
              </div>

              <div className="col-12 mt-3">
                <button
                  className="btn btn-save fw-bold px-4 text-white"
                  style={{ background: '#f07b2d', border: '2px solid #f07b2d' }}
                >
                  CHANGE PASSWORD
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}