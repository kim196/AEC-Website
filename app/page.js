import Link from "next/link";

export default function Home() {
  return (
    <section className="section">
      <div className="container">

        {/* Top two images */}
        <div className="grid-2">
        {/* LEFT: Sugar High Sweets */}
        <a
          className="card-img hero"
          href="https://sugarhigh-sweets.myshopify.com/collections/alpha-epsilon-the-road-to-00?utm_campaign=share_orders&utm_content=android&utm_medium=product-links"
        >
          <img src="/assets/hero-left.jpg" alt="Sugar High Sweets" />
          <span className="shop-btn">Shop Now</span>
        </a>

        {/* RIGHT: LBJ Greek Designs */}
        <a
          className="card-img hero"
          href="https://lbjgreekdesigns.com/shop?olsPage=t%2Faka-alpha-epsilon-boutique"
        >
          <img src="/assets/hero-right.jpg" alt="LBJ Greek Designs" />
          <span className="shop-btn">Shop Now</span>
        </a>
        </div>

        {/* Our Vendors section */}
        <div className="center">
          <h2 className="h2">Our Vendors</h2>
          <p className="lead">
            Discover unique collections from four distinguished vendors, each bringing
            their own expertise and passion to our centennial celebration
          </p>
        </div>

        {/* wide image */}
        <Link className="card-img wide" href="/vendor3">
          <img src="/assets/vendor-wide.jpg" alt="AllLuxuryGoods Heirloom Collection" />
          <span className="shop-btn">Shop Now</span>
        </Link>

      </div>
    </section>
  );
}