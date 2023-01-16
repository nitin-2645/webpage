import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <h5 className="logo"> Parazo </h5>
        </div>
        <div class="menu">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICE</a>
            </li>
            <li>
              <a href="#">DESIGN</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>

        <div class="search">
          
          <input
            class="srch"
            type="search"
            name=""
            placeholder="Type to text"
          />

          <button class="btn btn-warning">
            <a href="#">
              <h1>Search</h1>
            </a>
          </button>

        </div>
        <div class="content">
          <h1>
            Web Design & <br></br>
            <span>Development</span>
            <br></br>Course
          </h1>
          <p class="par">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sunt Neque
            Expedita Atque Eveniet <br></br> Quis Nesciunt. Quos Nulla Vero
            Consequuntur, Fugit<br></br>A Quae Totam Ipsa Illum Minus
            Iaudantium?
          </p>

          <button class="cn">
            <a href="#">JOIN US</a>
          </button>
          <div class="form">
            <h2>Login Here</h2>
            <input type="email" name="email" placeholder="Enter Email Here" />
            <input type="password" name="" placeholder="Enter Password" />
            <button class="btnn">
              <a href="#">Login</a>
            </button>

            <p class="Link">
              Don't have an account<br></br>
              <a href="#">Sign up </a>here
            </p>
            <p class="liw">Login in with</p>
            <div class="icon">
              <a href="#">
                <i class="fa-brands fa-facebook "></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-skype"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
