import './crossant.css';
import CrossantImg from './crossantImg.png'; //  New correct path

function Crossant() {
  return (
    <section className="crossant-section">
      <div className="crossant-container">

        {/* Left Column: Text Content */}
        <div className="crossant-content">
          <p className="crossant-price">From $5.99</p>
          <h2 className="crossant-title">Croissant</h2>
          <h4 className="crossant-subtitle">Duis aute irure quasi</h4>
          <p className="crossant-description">
            À l'intérieur, un labyrinthe doré de fines couches révèle <br />
            le contraste parfait entre une croûte croustillante et un cœur fondant,<br />
            offrant une expérience gustative inoubliable
          </p>
          <button className='crossant-btn'>Grab it</button>
        </div>

        {/* Right Column: Image Container */}
        <div className="crossant-image">
          <img src={CrossantImg} alt="Croissant" className="crossant-img" />
        </div>

      </div>
    </section>
  );
}
export default Crossant;