import './footer.css';
import FooterImg from './leaves.png';
import FacebookLogo from './facebookLogo.png';
import InstaLogo from './instaLogo.png';
import Twitterlogo from './twitterlogo.png';

function FooterSection() {
  return (

    <div className="FooterArea">
      <div class="Footer-Box">
        <div class="Footer-imageBox">
          <img src={FooterImg} />
        </div>

        <div className="column-1">
          <div className="columnContent-1">
            <h6>OUR ROOTS:</h6>
            <p className="Content1">Fairly traded &<br />Artisan Rroasted<br />Since 2021</p>
          </div>
        </div>

        <div className="gap-line"></div>

        <div className="column-2">
          <div className="columnContent-2">
            <p className='Content2'>Private Events<br />Gallery<br />Meet the Baristas<br />Merchandise</p>
          </div>
        </div>

        <div className="gap-line"></div>

        <div className="column-3">
          <div className="columnContent-3">
            <div className="icon-images">
              <div className='instalogo'>
                <img src={InstaLogo} />
              </div>
              <div className='facebooklogo'>
                <img src={FacebookLogo} />
              </div>
              <div className='twitterlogo'>
                <img src={Twitterlogo} />
              </div>
            </div>
            <div className="column3-text">
              <span><h3>FOLLOW THE AROMA:</h3></span>
              <span className='column3-para'><p>@Barista Party</p></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterSection;