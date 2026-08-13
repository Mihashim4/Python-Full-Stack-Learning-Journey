import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    if (!sessionStorage.getItem("welcomed")) {
      alert("Welcome to HASHIM Auto Parts!");
      sessionStorage.setItem("welcomed", "true");
    }
  }, []);

  return (

    <div className="fade-in">
      
      <section className="hero">
        <div className="hero-text text-center">
          <h1>HASHIM AUTO PARTS</h1>
          <p>New & Old Motor Spare Parts • Tires • Bearings</p>
          <p>For Cars, Lorries, Autos & More</p><br></br>
           <Link to="/products" className="btn btn-danger btn-lg mt-3">
           View Products
      </Link>
        </div>
      </section>

      <section className="about text-center py-5">
        <div className="container"><br></br>
        <h2>About Our Shop</h2><br></br>
        <p className='mt-3'>
          We deal in all kinds of Auto Parts & Old Motor Spare Parts. Established
          business serving Marthandam and surrounding areas.
        </p><br></br>
         <Link to="/about" className="btn btn-primary">
        Read Our Story
      </Link>
        </div>
      </section><br></br><br></br><hr></hr>

      <section className="products-section">
  <div className="container">
    <h2 className="section-title">Our Products</h2>

    <div className="products-grid">
      
      <div className="product-card">
        <img src="/images/tyre.jpeg" alt="Tires" />
        <h5>Tires</h5>
        <p>Kenda, Wanda, Leo, PowerMax & more</p>
      </div>

     
      <div className="product-card">
        <img src="/images/autoparts.jpeg" alt="Engine Parts" />
        <h5>Engine Parts</h5>
        <p>Spare parts for cars, lorries & autos</p>
      </div>

      
      <div className="product-card">
        <img src="/images/bearings.jpeg" alt="Bearings" />
        <h5>Bearings & Electrical</h5>
        <p>Quality new and old parts</p>
      </div>
    </div>

    <div className="text-center" style={{ marginTop: "30px" }}>
      <Link to="/products" className="btn btn-primary">
        Check All Products
      </Link>
    </div>
  </div>
</section><hr></hr>

      <section className="contact text-center py-5"><br></br>
        <h2>Contact Us</h2>
        <p>
          <strong>Contact:</strong> M. Nasar
        </p>
        <p>
          <strong>Mobile:</strong> 9486452629
        </p>
        <p>
          <strong>Res:</strong> 04651-271145
        </p>
        <p>
          <strong>Address:</strong> Kulasekharam Road, Keezh Pammam, Marthandam -
          629 165
        </p>
      </section><br></br>
      
       
    </div>
  );
}

export default Home;
