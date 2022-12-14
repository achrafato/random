import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home_content">
          <h1>Discover Most Suitable Property</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <div className="form">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="search for an estate" />
            <button>Search</button>
          </div>

          <div className="numbers">
            <div className="item">
              <h1>
                9k <span>+</span>
              </h1>
              <p>happy</p>
              <p>award</p>
            </div>
            <div className="item">
              <h1>
                9k <span>+</span>
              </h1>
              <p>happy</p>
              <p>award</p>
            </div>
            <div className="item">
              <h1>
                9k <span>+</span>
              </h1>
              <p>happy</p>
              <p>award</p>
            </div>
          </div>
        </div>

        <div className="pic_side">
          <div className="back"></div>
          <img
            src="https://images.unsplash.com/photo-1668787854810-fc2e682f48b0"
            alt="desert"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
