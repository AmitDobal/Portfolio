import "./intro.scss";
function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Amit Singh Dobal</h1>
          <h3>
            freelance <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default intro;
