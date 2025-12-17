import Link from "next/link";

export default function Home() {
  return (
    <section className="section">
      <div className="container">

        {/* Top two images */}
        <div className="grid-2">

          {/* LEFT: The Sweetest Experience */}
          <div className="vendor-block">
            <a
              className="card-img hero"
              href="https://sugarhigh-sweets.myshopify.com/collections/alpha-epsilon-the-road-to-00?utm_campaign=share_orders&utm_content=android&utm_medium=product-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/hero-left.jpg" alt="The Sweetest Experience" />
              <span className="shop-btn">Shop Now</span>
            </a>
            <div className="vendor-name">The Sweetest Experience</div>
          </div>

          {/* RIGHT: LBJ Greek Designs */}
          <div className="vendor-block">
            <a
              className="card-img hero"
              href="https://lbjgreekdesigns.com/shop?olsPage=t%2Faka-alpha-epsilon-boutique"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/hero-right.jpg" alt="LBJ Greek Designs" />
              <span className="shop-btn">Shop Now</span>
            </a>
            <div className="vendor-name">LBJ Greek Designs</div>
          </div>

        </div>

        {/* Our Vendors section */}
        <div className="center">
          <h2 className="h2">Our Vendors</h2>
          <p className="lead">
            Explore apparel and jewelry from three vendors, each offering pieces created especially for our centennial celebration.
          </p>
        </div>

        {/* Wide image */}
        <div className="vendor-block">
          <Link className="card-img wide" href="/vendor3">
            <img
              src="/assets/vendor-wide.jpg"
              alt="A Long Legacy Luxury Goods Inc."
            />
            <span className="shop-btn">Shop Now</span>
          </Link>
          <div className="vendor-name">
            A Long Legacy Luxury Goods Inc.
          </div>
        </div>

      </div>
    </section>
  );
}
