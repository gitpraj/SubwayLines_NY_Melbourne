import React, { Component } from 'react';
import Map from './Map';

// App component
class LandingPage extends Component {

  constructor(props) {
        super(props);
        this.state = {
            imgSrc: "https://i0.wp.com/www.manilalivewire.com/wp-content/uploads/1365473620_0729.760x498.jpeg?resize=640%2C420"
        }

        this.click = this.click.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    click(e) {
        // this.setState({ [e.target.name]: e.target.value })
        this.context.router.push('/map')
    }

    mouseOver(e) {
      // console.log("onMouseOVer reached")
      this.setState({
        imgSrc: "https://i.pinimg.com/originals/40/80/bf/4080bf1fa096fa2b71cb5ba33a6497a3.jpg"
      })
    }

    mouseOut() {
      // console.log("mouseout reached")
      this.setState({
        imgSrc: "https://i0.wp.com/www.manilalivewire.com/wp-content/uploads/1365473620_0729.760x498.jpeg?resize=640%2C420"
      })
    }

    render() {
      const {imgSrc} = this.state
      return (
        <div className="jumbotron">
          <div className="container float_on_the">
            <div className="col-md-5 landing-page-block landing-block">
                <div className="center-image">
                  <img src={imgSrc} onClick={this.click}
                    onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                  </img>
                </div>
            </div>
          </div>
        </div>
    )
      // return <Map />;
    }
}

LandingPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LandingPage;
