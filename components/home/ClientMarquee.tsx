/* eslint-disable @next/next/no-img-element */
"use client"

export function ClientMarquee() {
  const logos = [
    "/media/logos/10001.png",
    "/media/logos/10002.png",
    "/media/logos/10003.png",
    "/media/logos/10004.png",
    "/media/logos/10005.png",
    "/media/logos/10006.png",
    "/media/logos/10007.png",
    "/media/logos/10008.png",
    "/media/logos/10009.png",
    "/media/logos/10010.png"
  ]
  const doubled = [...logos, ...logos]

  return (
    <>
      <style>{`
        .trust-section {
          background-color: #f8f8f8;
          padding: 40px 0;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          overflow: hidden;
        }
        .trust-container {
          text-align: center;
          margin-bottom: 24px;
        }
        .trust-section h3 {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
          color: #0a0a0a;
        }
        .trust-section p {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.4;
        }
        .trust-marquee-wrapper {
          position: relative;
          display: flex;
          overflow: hidden;
          padding: 0 16px;
        }
        .trust-marquee-wrapper::before,
        .trust-marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .trust-marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #f8f8f8, transparent);
        }
        .trust-marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #f8f8f8, transparent);
        }
        .trust-logos {
          display: flex;
          gap: 40px;
          align-items: center;
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        .trust-logos:hover {
          animation-play-state: paused;
        }
        .trust-logos img {
          max-height: 45px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.6);
          transition: filter 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .trust-logos img:hover {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.05);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 767px) {
          .trust-section {
            padding: 32px 0;
          }
        }
      `}</style>
      <section className="trust-section">
        <div className="trust-container font-body">
          <h3>MÁS DE 24 EMPRESAS LÍDERES CONFÍAN EN NOSOTROS</h3>
          <p>Sector público y privado · Energía · Industria · Infraestructura</p>
        </div>
        
        <div className="trust-marquee-wrapper">
          <div className="trust-logos">
            {doubled.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`Cliente ${i}`} 
                loading="lazy" 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
