export default function Raffle() {
    return (
      <section className="raffle-page">
        <div className="container">
  
          {/* Top pill */}
          <div className="raffle-pill">
            Baltimore • Feb 26–28, 2026
          </div>
  
          {/* Title */}
          <h2 className="raffle-title">
            Come Have A Ball
          </h2>
          <p className="raffle-subtitle">
            Where the Winner Takes All!
          </p>
  
          {/* What you could win */}
          <div className="raffle-section">
            <h3 className="raffle-section-title">What You Could Win</h3>
  
            <div className="raffle-cards">
              <div className="raffle-card">
                <h4>Luxury Hotel Stay</h4>
                <p>Two nights at the William Fell Baltimore</p>
                <span>Thursday 2/26/26 – Saturday 2/28/26</span>
              </div>
  
              <div className="raffle-card">
                <h4>Premium Dining</h4>
                <p>$100 dinner certificate basket with bottle of wine + 2 glasses</p>
                <span>The Capital Grille – 500 E. Pratt St.</span>
              </div>
  
              <div className="raffle-card">
                <h4>Casino Entertainment</h4>
                <p>$100 Casino chip</p>
                <span>Horseshoe Casino Baltimore – 1525 Russell St.</span>
              </div>
            </div>
          </div>
  
          {/* Ticket pricing bar */}
          <div className="raffle-pricing-bar">
            <div className="raffle-pricing-text">
              <h4>Get Your Tickets</h4>
              <p>Support a great cause while entering to win! <br></br>
                Drawings will be done on February 15th, 2026</p>
            </div>
  
            <div className="raffle-pricing-options">
              <div className="raffle-price muted">
                <span>1 Ticket</span>
                <strong>$10</strong>
              </div>
              <div className="raffle-price highlight">
                <span>3 Tickets</span>
                <strong>$20</strong>
              </div>
            </div>
          </div>
  
          {/* Proceeds --- might delete */}
          {/* 
          <div className="raffle-proceeds">
            <div className="raffle-line"></div>
            <p>
              <strong>All proceeds benefit AE Centennial</strong>
            </p>
          </div>
        */}
  
          {/* CTA */}
          <div className="raffle-cta">
            <a
              href="https://forms.gle/pfMM11Q7GJZSTP8s6"
              target="_blank"
              rel="noopener noreferrer"
              className="raffle-enter-btn"
            >
              Enter Now →
            </a>
          </div>
  
        </div>
      </section>
    );
  }
  