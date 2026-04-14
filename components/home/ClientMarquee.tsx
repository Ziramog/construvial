"use client"

export function ClientMarquee() {
  return (
    <>
      <style>{`
        .trust-section {
          background-color: #f8f8f8;
          padding: 40px 24px;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
        }
        .trust-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
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
          margin: 0 0 24px;
          line-height: 1.4;
        }
        .trust-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 24px;
          align-items: center;
          justify-items: center;
        }
        .trust-logos img {
          max-height: 45px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.6);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        .trust-logos img:hover {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.05);
        }
        @media (max-width: 767px) {
          .trust-section {
            padding: 32px 0;
          }
          .trust-container h3, .trust-container p {
            padding-left: 16px;
            padding-right: 16px;
          }
          .trust-logos {
            display: flex;
            overflow-x: auto;
            gap: 32px;
            padding: 0 16px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .trust-logos::-webkit-scrollbar {
            display: none;
          }
          .trust-logos img {
            flex: 0 0 auto;
            scroll-snap-align: center;
            max-height: 40px;
          }
        }
      `}</style>
      <section className="trust-section">
        <div className="trust-container font-body">
          <h3>MÁS DE 24 EMPRESAS LÍDERES CONFÍAN EN NOSOTROS</h3>
          <p>Sector público y privado · Energía · Industria · Infraestructura</p>
          <div className="trust-logos">
            <img src="/media/logos/logo-nca.svg" alt="NCA Logo" width="120" height="45" loading="lazy" />
            <img src="/media/logos/logo-axion.svg" alt="Axion Logo" width="120" height="45" loading="lazy" />
            <img src="/media/logos/logo-ypf.svg" alt="YPF Logo" width="120" height="45" loading="lazy" />
            <img src="/media/logos/logo-invap.svg" alt="INVAP Logo" width="120" height="45" loading="lazy" />
            <img src="/media/logos/logo-nasa.svg" alt="NASA Logo" width="120" height="45" loading="lazy" />
            <img src="/media/logos/logo-placeholder.svg" alt="Placeholder" width="120" height="45" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  )
}
