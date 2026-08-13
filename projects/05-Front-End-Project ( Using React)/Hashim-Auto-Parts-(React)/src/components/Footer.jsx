function Footer() {
  const handleBrandClick = () => {
    alert("Thank you for checking our tyre partners!");
  };

  return (
    <footer>
      <div className="brands">
        <p>Our Tyre Partners:</p>
        <div className="brand-logos">
          <a href="https://wandatyre.cn/" target="_blank" rel="noreferrer">
            <img
              src="/images/Wanda.jpeg"
              alt="Wanda Tyre"
              onClick={handleBrandClick}
            />
          </a>
          <a
            href="https://www.kendatire.com/en-us/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/Kenda_Logo.jpeg"
              alt="Kenda Tyre"
              onClick={handleBrandClick}
            />
          </a>
          <a
            href="https://www.powermaxtyre.com/Bike-Tyres.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/powermax.jpeg"
              alt="PowerMax"
              onClick={handleBrandClick}
            />
          </a>
          <a href="https://leao-tyres.com/" target="_blank" rel="noreferrer">
            <img
              src="/images/Leao.jpeg"
              alt="Leao Tyre"
              onClick={handleBrandClick}
            />
          </a>
        </div>
      </div>
      <p>&copy; Hashim Auto Parts - In Memory of the Old Shop</p>
      <p>Kulasekharam Road, Keezh Pammam, Marthandam - 629 165</p>
    </footer>
  );
}

export default Footer;
