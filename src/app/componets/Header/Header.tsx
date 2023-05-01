import "./style.scss";
import icon2 from '../../../assets/images/Icon2.png'
import cart1 from '../../../assets/images/Cart (1).png'
export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <a href="#">
              <img className="icon1" src={icon2} />
            </a>
          </div>
          <div className="header-2">
            <nav className="nav">
              <ul className="nav-items">
                <li>
                  <a href="#">Home</a>{" "}
                </li>
                <li>
                  <a href="#">Pages</a>{" "}
                </li>
                <li>
                  <a href="#">About</a>{" "}
                </li>
                <li>
                  <a href="#">Contact</a>{" "}
                </li>
              </ul>
            </nav>
            <a href="#">
              <img className="Cart" src={cart1} />
            </a>
            <button className="button">Order Today</button>
          </div>
        </div>
      </div>
    </header>
  );
};
