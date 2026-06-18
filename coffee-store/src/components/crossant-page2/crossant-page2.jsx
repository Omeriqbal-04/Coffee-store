import './crossant-page2.css';
import CenterImage from './column2-image.jpg';
import RightImage from './column-3image.jpg';
import DelieveryImage from './delieveryImage.png';

function crossantPage2() {
  return (
    <section className="crossant-page2-section">
      <div className="crossant-page2-container">
        <div className="delivery-card">
          <div className='delieveryColumn-1'>
            <div className='headingBox'>
              <h2>FRESH-BAKED <br />GOODS,<br />DELIEVERED</h2>
            </div>
            <div className='contentBox'>
              <div className='line-1'>
                <h4>SAME-DAY DELIEVERY</h4>
                <p>For order before 12am</p>
              </div>
              <div className='line-2'>
                <h4>EXTENDED DELIEVERY ZONE</h4>
                <p>View a simplified map overview</p>
              </div>
              <div className='line-3'>
                <h4>ECO CONSCIOUS<br />PACKAGING</h4>
              </div>
              <div className='logoBox'>
                <img src={DelieveryImage} alt="Delievery-logo" />
              </div>
            </div>
          </div>
          <div className='delieveryColumn-2'>
            <img src={CenterImage} />
            <button className="column2-Btn">Order Now</button>
          </div>
          <div className='delieveryColumn-3'>
            <div className='contentBox-image'>
              <img src={RightImage} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default crossantPage2;



