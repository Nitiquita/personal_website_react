import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import { slideInLeft } from 'react-animations';
import ScrollableAnchor from 'react-scrollable-anchor';
import Scrollchor from 'react-scrollchor';
import { StyleSheet, css } from 'aphrodite';
// import './App.css';

const styles = StyleSheet.create({
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: '1s'
  }
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight})
  }

  render() {
    const divSize = {
      width: this.state.width ? this.state.width + 'px' : null,
      height: this.state.height ? this.state.height + 200 + 'px' : null
    }
    return (
      <div>
        {/*<Parallax ref="parallax" pages={3}>
          <Parallax.Layer offset={0} speed={1} />
          <Parallax.Layer offset={1} speed={1} />
    <Parallax.Layer offset={2} speed={1} />*/}

          <nav>
            <ul>
              <li><a href="#about">about</a></li>
              <li><a href="#skills ">skills</a></li>
              <li><a href="#projects">projects</a></li>

            </ul>
          </nav>
          <ScrollableAnchor id={'about'}>
            {/*<Parallax.Layer
              offset={0}
              id="layer1"
            >*/}
            <div className="section1" style={divSize && divSize}>
              <div className="heading" >
                <img id="name" src={require("../public/assets/coollogo_com-139921264.png")} alt="name" />
                <div className="subheading">
                  <h1>Fullstack JavaScript Developer</h1>
                  <div className="icon-box">
                    <a href="https://www.linkedin.com/in/nitika-nadgar/" target="_blank" rel="noopener noreferrer"><img className="icon" src={require("../public/assets/if_linkedin_2062080.svg")} alt="linkedin" /></a>
                    <a href="https://medium.com/@nitikanadgar" target="_blank" rel="noopener noreferrer"><img className="icon" src={require("../public/assets/if_Medium_2062081.svg")} alt="medium" /></a>
                    <a href="https://www.instagram.com/nitiquita/?hl=en" target="_blank" rel="noopener noreferrer"><img className="icon" src={require("../public/assets/if_Instagram_2062078.svg")} alt="instagram" /></a>
                  </div>

                </div>
              </div>
              </div>
            {/*</Parallax.Layer>*/}
          </ScrollableAnchor>

          <ScrollableAnchor id={'skills'}>

            {/*<Parallax.Layer
            offset={1}>*/}
            <div className="section2" style={divSize && divSize}>
              <div className="heading2">
                <img id="skills-img" src={require("../public/assets/coollogo_com-14589149.png")} alt="skills" />
                <div className="skills">
                  <div id="proficient">
                    <h1 className="list">Proficient</h1>
                    <h2 className={css(styles.slideInLeft)} className="list ">JavaScript</h2>
                    <h2 className="list">NodeJS/ ExpressJS</h2>
                    <h2 className="list">ReactJS/ Redux</h2>
                    <h2 className="list">Sequelize</h2>
                    <h2 className="list">HTML</h2>
                    <h2 className="list">CSS</h2>
                  </div>
                  <div id="knowledgeable">
                    <h1 className="list">Knowledgeable</h1>
                    <h2 className="list">Git</h2>
                    <h2 className="list">jQuery</h2>
                    <h2 className="list">Agile</h2>
                    <h2 className="list">Bootstrap</h2>
                    <h2 className="list">React Native</h2>
                    <h2 className="list">Firebase</h2>
                    <h2 className="list">AngularJS</h2>
                    <h2 className="list">Axios</h2>
                    <h2 className="list">ES2015</h2>
                    <h2 className="list">SQL</h2>
                  </div>
                  <div id="familiar">
                    <h1 className="list">Familar</h1>
                    <h2 className="list">Lodash</h2>
                    <h2 className="list">Bluebird</h2>
                    <h2 className="list">Jasmine</h2>
                    <h2 className="list">Nunjucks</h2>
                  </div>
                </div>
              </div>
              {/*</Parallax.Layer>*/}
              </div>
            </ScrollableAnchor>
          

            <ScrollableAnchor id={'projects'}>
            {/*<Parallax.Layer
            offset={2}>*/}
            <div className="section1" style={divSize && divSize}>
              <div className="heading">
                <img id="name" src={require("../public/assets/coollogo_com-823154.png")} alt="projects" />
                <div className="subheading">
                  <div className="icon-box">
                    <a href="https://github.com/Nitiquita" target="_blank" rel="noopener noreferrer"><img className="icon" id="github" src={require("../public/assets/if_github_287583.svg")} alt="github" /></a>
                    <a href="https://codepen.io/nitiquita/" target="_blank" rel="noopener noreferrer"><img className="icon" id="codepen" src={require("../public/assets/if_codepen_1542794.svg")} /></a>
                  </div>
                  <div className="projects">
                    <h1>Presentation Links</h1>
                    <a href="https://www.youtube.com/watch?v=32Hmju3nUCU"><h2>Before You Hand It In!</h2></a>
                    <a href="https://www.youtube.com/watch?v=xu7ia80vnR4"><h2>Pusheen Travel</h2></a>
                  </div>
                </div>
              </div>
              {/*</Parallax.Layer>*/}
              </div>
            </ScrollableAnchor>
            
        {/*</Parallax>*/}
      </div>
          )
  }
}

export default App;
