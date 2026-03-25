import { Link } from 'react-router-dom'

// Macbook Banner + Latest News
// Bootstrap: row, col, card
// https://getbootstrap.com/docs/5.3/components/card/

const news = [
  {
    id: 1,
    img: 'https://clicon-html.netlify.app/image/news/1.png',
    author: 'Kristin',
    date: '19 Dec, 2013',
    comments: 453,
    title: 'Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.',
    desc: 'Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.',
  },
  {
    id: 2,
    img: 'https://clicon-html.netlify.app/image/news/2.png',
    author: 'Robert',
    date: '28 Nov, 2015',
    comments: 738,
    title: 'Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.',
    desc: 'Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.',
  },
  {
    id: 3,
    img: 'https://clicon-html.netlify.app/image/news/3.png',
    author: 'Kristin',
    date: '9 May, 2014',
    comments: 826,
    title: 'Curabitur massa orci, consectetur et blandit ac, auctor et tellus.',
    desc: 'Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.',
  },
]

export default function MacbookBanner() {
  return (
    <>
      {/* Macbook Banner — Full Width */}
      <div style={{background:'#fce8d5'}} className="py-5">
        <div className="page-container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <span className="badge px-3 py-2 mb-3 d-inline-block"
                    style={{background:'#2b6cb0', fontSize:'.8rem'}}>
                SAVE UP TO $200.00
              </span>
              <h2 className="fw-bold mb-2">Macbook Pro</h2>
              <p className="text-muted mb-4">
                Apple M1 Max Chip. 32GB Unified<br/>Memory, 1TB SSD Storage
              </p>
              <Link to="/shop" className="btn btn-save fw-bold px-4 text-white"
                  style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                SHOP NOW →
              </Link>
            </div>
            <div className="col-lg-7 text-center position-relative">
              <span className="badge rounded-circle position-absolute"
                    style={{
                      background:'#fce8d5', color:'#000',
                      width:'60px', height:'60px',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      top:'0', left:'30%', fontSize:'.85rem', fontWeight:'bold'
                    }}>$1999</span>
              <img src="https://clicon-html.netlify.app/image/product/apple.png"
                   alt="Macbook Pro" className="img-fluid"
                   style={{maxHeight:'300px', objectFit:'contain'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-5" style={{background:'#f8f9fa'}}>
        <div className="page-container">
          <h5 className="fw-bold text-center mb-4">Latest News</h5>
          <div className="row g-4">
            {news.map(n => (
              <div key={n.id} className="col-lg-4">
                <div className="news-img-wrap">
                  <img src={n.img} alt={n.title}
                       className="card-img-top news-img"
                       style={{height:'200px', objectFit:'cover'}} />
                  <div className="card-body p-3">
                    {/* Meta */}
                    <div className="d-flex align-items-center gap-3 mb-2 text-muted" style={{fontSize:'.78rem'}}>
                      <span>👤 {n.author}</span>
                      <span>📅 {n.date}</span>
                      <span>💬 {n.comments}</span>
                    </div>
                    <h6 className="fw-bold mb-2" style={{fontSize:'.88rem', lineHeight:'1.4'}}>
                      {n.title}
                    </h6>
                    <p className="text-muted mb-3" style={{fontSize:'.82rem', lineHeight:'1.5'}}>
                      {n.desc}
                    </p>
                    <Link to="#" className="btn btn-save fw-bold px-4 text-white"
                        style={{background:'#f07b2d', border:'2px solid #f07b2d'}}>
                      READ MORE →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}