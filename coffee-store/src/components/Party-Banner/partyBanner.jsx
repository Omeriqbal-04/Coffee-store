import './partyBanner.css';
import CoffeeSplash from './coffeesplash.png'

function PartyBanner() {
  return (
    <section className="PartyBanner-section">
      <div className="PartyBanner-container">
        <div className="PartyBanner-card">
          <div className="PartyBanner-content">
            <div className="PartBanner-column1">
              <div className="column1-content">
                <h1 className="column1-heading">Barista<br />Party</h1>
                <div className="straight-line"></div>
                <h3 className="column1-heading2">Every Friday & Saturday</h3>
                <p className="column1-paragraph">A golden blend of music, laughter, and perfectly poured   moments.Join us as we raise a cup to the night and let the rich vibes flow.
                  A glance inside exposes an evening layered in warmth and premium flavor,
                  where the music is smooth, the company is rich, and the espresso never ends.
                </p>
                <button className="column1-btn">Make Reservation</button>
              </div>
            </div>

            <div className="PartyBanner-column2">
              <div className="PartyBanner-coffee-cupBox">
                <img src={CoffeeSplash} alt="Coffee-img" className="coffee-cupBox-image" />
              </div>
            </div>

            <div className="PartyBanner-column3">
              <div className="column3-content">
                <h1 className='column3-heading'>Location</h1>
                <div className="column3-straightLine"></div>
                <p className="column3-location">124 Espresso Boulevard, Downtown | Valet Parking Available</p>
                <h6 className="address-heading">Address</h6>
                <p className="address-paragraph">Charlie Chaplin Cage, Nonai PO Society</p>
                <button className='address-btn'>See On Google Maps</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default PartyBanner;
