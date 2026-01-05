const products = [
  {
    name: "Centennial Bracelet",
    price: "$50.00",
    url: "https://pay.allluxurygoods.com/Centennial_Bracelet",
    img: "/assets/allluxury/centennial-bracelet.jpg",
  },
  {
    name: "Alpha Epsilon Centennial Ring (Pink & Green)",
    price: "$50.00",
    url: "https://pay.allluxurygoods.com/AECRingPink_Green",
    img: "/assets/allluxury/ring-pink-green.jpg",
  },
  {
    name: "Alpha Epsilon Centennial Ring (Solid)",
    price: "$50.00",
    url: "https://pay.allluxurygoods.com/AEC_solidring",
    img: "/assets/allluxury/ring-solid.jpg",
  },
  {
    name: "Alpha Epsilon Centennial Necklace – Gold / Silver",
    price: "$50.00",
    url: "https://pay.allluxurygoods.com/AENCentennialGold",
    img: "/assets/allluxury/necklace-gold-silver.jpg",
  },
  {
    name: "Alpha Epsilon Centennial Necklace – Pink & Green",
    price: "$50.00",
    url: "https://pay.allluxurygoods.com/c413ae3b-c0e9-4a48-ba9e-3c9",
    img: "/assets/allluxury/necklace-pink-green.jpg",
  },
  {
    name: "Alpha Epsilon Centennial Heirloom Collection (Silver)",
    price: "$150.00",
    url: "https://pay.allluxurygoods.com/ca2ada9a-a28f-4c3e-87f8-9f6",
    img: "/assets/allluxury/heirloom-silver.jpg",
  },
  {
    name: "Alpha Epsilon Centennial Heirloom Collection (Gold)",
    price: "$150.00",
    url: "https://pay.allluxurygoods.com/AECFSGold",
    img: "/assets/allluxury/heirloom-gold.jpg",
  },
];

export default function Vendor3() {
  return (
    
    <section className="section">
      
      <div className="container">

        <div className="center">
          <h2 className="h2">Alpha Epsilon Centennial Heirloom Collection</h2>
        </div>

        <div className="vendor-info">
          
          <p className="vendor-intro">
            Exquisitely handmade by artisans with over 15 years of experience, the
            Alpha Epsilon Centennial Heirloom Collection by
            A Long Legacy Luxury Goods Inc. honors the enduring
            legacy of Alpha Kappa Alpha Sorority, Incorporated®.
          </p>

          <p className="vendor-description">
            Each piece is a commemorative keepsake designed to reflect the elegance,
            pride, and excellence of the women of Alpha Epsilon Chapter. From radiant
            toggle bracelets and statement rings to engraved medallion necklaces,
            every item captures the spirit of sisterhood through fine detail,
            high-quality finishes, and timeless symbolism. Whether selected
            individually or as a complete heirloom set, this collection offers a
            lasting tribute to a century of scholarship, service, and sisterhood.
          </p>

          <p className="vendor-support">
            <strong>Questions or problems placing your order?</strong><br />
            Please contact 
            <a href="tel:19177712503"> 917-771-2503</a>.
          </p>

          <div className="vendor-dates">
            <div><strong>Order Deadline:</strong> January 31, 2026</div>
            <div><strong>Estimated Delivery:</strong> July 15, 2026</div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((p) => (
            <a
              key={p.name}
              className="product-card"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="product-thumb">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="product-meta">
                <div className="product-name">{p.name}</div>
                <div className="product-price">{p.price}</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
