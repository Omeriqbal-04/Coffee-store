import './drink.css';
import cappuccinoImg from './cappucino.png';
import expressoImg from './expresso.png';
import icedCoffeeImg from './Ice-coffee.png';

function Drinks() {
  return (
    <section>
      <div className="drinks-container">
        <div className="drinks-content">
          <h2 className="drinks-tittle">Drinks</h2>
          <p className="drinks-description">
            Discover our wide range of coffee drinks, from classic espresso to creamy lattes and refreshing iced coffees.
            Each cup is crafted with care using our high-quality beans, ensuring a rich and satisfying experience in every sip.
          </p>
        </div>

        <div className="drinks-menu">
          <div className="drink-item">
            <div className="box-content">
              <div className="Expresso-image">
                <img src={expressoImg} alt='Expresso' className='expresso-image' />
              </div>
              <h3 className="drink-name">Espresso</h3>
              <p className="drink-description">
                A strong and concentrated coffee made by forcing hot water through finely-ground coffee beans.
              </p>
              <button className="order-btn">Get Dielivery</button>
            </div>
          </div>

          <div className="drink-item">
            <div className="box-content">
              <div className="drink-image2">
                <img src={cappuccinoImg} alt="Cappuccino" className="cappuccino-image" />
              </div>
              <h3 className="drink-name">Cappuccino</h3>
              <p className="drink-description">
                A creamy coffee drink made with equal parts of espresso, steamed milk, and milk foam.
              </p>
              <button className="order-btn">Get Dielivery</button>
            </div>
          </div>

          <div className="drink-item">
            <div className="box-content">
              <div className="IcedCoffee-image">
                <img src={icedCoffeeImg} alt="Iced Coffee" className="iced-coffee-image" />
              </div>
              <h3 className="drink-name">Iced Coffee</h3>
              <p className="drink-description">
                A refreshing cold coffee drink served over ice, perfect for hot days. Meow meow meow
              </p>
              <button className="order-btn">Get Dielivery</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Drinks;