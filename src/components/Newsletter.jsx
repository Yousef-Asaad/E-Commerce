import { useState } from 'react'
import { Link } from 'react-router-dom'

// Newsletter + Sponsors
// Bootstrap: input-group, d-flex

export default function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <div style={{background:'#2b6cb0'}} className="py-5">
      <div className="page-container">

        {/* Newsletter */}
        <div className="text-center text-white mb-4">
          <h5 className="fw-bold mb-2">Subscribe to our newsletter</h5>
          <p style={{
            fontSize: '.88rem', 
            color: 'rgba(255,255,255,0.8)', 
            maxWidth: '500px', 
            margin: '0 auto'
          }}>
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et
            cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
        </div>

        {/* Input group */}
        <div className="input-group mx-auto mb-5" style={{maxWidth:'500px'}}>
          <input
            type="email"
            className="form-control border-0 py-3"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button 
            className="btn btn-save fw-bold px-4 text-white"
            style={{background:'#f07b2d', border:'2px solid #f07b2d'}}
          >
            SUBSCRIBE →
          </button>
        </div>

        {/* Sponsors */}
        <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
          <img src="https://clicon-html.netlify.app/image/logo/googel.png"
               alt="Google" style={{height:'24px', filter:'brightness(0) invert(1)', opacity:'.7'}} />
          <img src="https://clicon-html.netlify.app/image/logo/amaazon.png"
               alt="Amazon" style={{height:'24px', filter:'brightness(0) invert(1)', opacity:'.7'}} />
          <img src="https://clicon-html.netlify.app/image/logo/samsung.png"
               alt="Samsung" style={{height:'24px', filter:'brightness(0) invert(1)', opacity:'.7'}} />
          <img src="https://clicon-html.netlify.app/image/logo/toshiba.png"
               alt="Toshiba" style={{height:'24px', filter:'brightness(0) invert(1)', opacity:'.7'}} />
        </div>

      </div>
    </div>
  )
}