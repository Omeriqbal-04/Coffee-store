import './about.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className='about-box'>
          <div className='about-content'>
            <h3 className="about-title">ABOUT</h3>
            <p className="about-description">
              At our coffee store, we are passionate about delivering the finest coffee experience to our customers. We source our beans from sustainable farms around the world, ensuring that every cup of coffee we serve is not only delicious but also ethically produced.
            </p>
          </div>
        </div>

        <div className="about-content2">
          <div className='about-column1'>
            <p className="about-column1-description">
              Our journey began with a simple mission
            </p>
            <h2 className="about-column1-title">WE offer a <br />unique coffee<br />house<br />enviourment<br />unlike any<br />other in KARACHI</h2>
          </div>
          <div className='about-column2'>
            <h4>We are the best place to enjoy your coffee</h4>
            <p className="about-column2-description">
              Our skilled baristas are dedicated to crafting the perfect cup of coffee, whether you prefer a classic espresso, a creamy latte, or a refreshing cold brew. We take pride in our attention to detail and commitment to quality, ensuring that every sip is a delightful experience. we also offer a cozy and inviting atmosphere where you can relax, work, or catch up with friends while enjoying your favorite coffee. Join us on this journey of flavor and community as we continue to serve the best coffee in town.<br /> Our store is not just a place to grab a quick cup; it's a destination for coffee lovers seeking an exceptional experience.<br /> We look forward to welcoming you and sharing our passion for coffee with you!<br /> The best coffee in Karachi, brewed with love and served with a smile.<br /> We are committed to sustainability and ethical sourcing, ensuring that every cup of coffee you enjoy supports farmers and communities around the world. <br /> Join us in our mission to create a better coffee experience for everyone, one cup at a time.
            </p>
            <button className="about-button">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;