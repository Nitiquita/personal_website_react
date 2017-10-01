import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
// import './App.css';

class App extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={3}>
        <Parallax.Layer offset={0} speed={1} />
        <Parallax.Layer offset={1} speed={1} />
        <Parallax.Layer offset={2} speed={1} />
        <Parallax.Layer
          offset={0}
          id="layer1"
        >
          <div className="App">
            <div className="text">
              <img id="name" src={require("../public/assets/coollogo_com-139921264.png")} alt="name" />
              <div id="subheading">
                <h2>Fullstack JavaScript Developer</h2>

                <a href="https://www.linkedin.com/in/nitika-nadgar/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require("../public/assets/if_linkedin_2062080.svg")} alt="linkedin" /></a>
                <a href="https://medium.com/@nitikanadgar" target="_blank" rel="noopener noreferrer"><img className="icon" src={require("../public/assets/if_Medium_2062081.svg")} alt="medium" /></a>
                <a href="https://www.instagram.com/nitiquita/?hl=en" target="_blank" rel="noopener noreferrer"><img className="icon" src={require("../public/assets/if_Instagram_2062078.svg")} alt="instagram" /></a>
              </div>
            </div>
          </div>
        </Parallax.Layer>
        <Parallax.Layer
          offset={1}>
          <div id="skills">
            <img id="skills" src={require("../public/assets/coollogo_com-14589149.png")} alt="skills" />
          </div>
          <div id="proficient">
            <h2 className="list">Proficient</h2>
            <h3 className="list">JavaScript</h3>
            <h3 className="list">NodeJS/ ExpressJS</h3>
            <h3 className="list">ReactJS/ Redux</h3>
            <h3 className="list">Sequelize</h3>
            <h3 className="list">HTML</h3>
            <h3 className="list">CSS</h3>
          </div>
          <div id="knowledgeable">
            <h2 className="list">Knowledgeable</h2>
            <h3 className="list">Git</h3>
            <h3 className="list">jQuery</h3>
            <h3 className="list">Agile</h3>
            <h3 className="list">Bootstrap</h3>
            <h3 className="list">React Native</h3>
            <h3 className="list">Firebase</h3>
            <h3 className="list">AngularJS</h3>
            <h3 className="list">Axios</h3>
            <h3 className="list">ES2015</h3>
            <h3 className="list">SQL</h3>
          </div>
          <div id="familiar">
            <h2 className="list">Familar</h2>
            <h3 className="list">Lodash</h3>
            <h3 className="list">Bluebird</h3>
            <h3 className="list">Jasmine</h3>
            <h3 className="list">Nunjucks</h3>
          </div>
        </Parallax.Layer>
        <Parallax.Layer
          offset={2}>
          <div id="projects">
            <img id="name" src={require("../public/assets/coollogo_com-823154.png")} alt="projects" />
          </div>
          <div>
            <a href="https://github.com/Nitiquita" target="_blank" rel="noopener noreferrer"><img id="github" src={require("../public/assets/if_1-06_2311228.svg")} alt="github" /></a>
          </div>
          <div className="projects">
            <h1>Presentation Links</h1>
            <a href="https://www.youtube.com/watch?v=32Hmju3nUCU"><h2>Before You Hand It In!</h2></a>
            <a href="https://www.youtube.com/watch?v=xu7ia80vnR4"><h2>Pusheen Travel</h2></a>
          </div>
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default App;
