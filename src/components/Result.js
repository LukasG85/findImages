import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "./Image";
import styled from "styled-components";

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
    this.imagesLightbox = [];
    this.imagesList = null;
    this.index = 0;
  }
  handleSlider = index => {
    this.setState({
      isOpen: true,
      photoIndex: index
    });
  };

  componentDidUpdate() {
    this.imagesLightbox = [];
    this.index = 0;
    let src, id, user, tags, thumbnail, index;
    this.props.images.forEach(image => {
      src = image.largeImageURL;
      id = image.id;
      index = this.index++;
      user = image.user;
      tags = image.tags;
      thumbnail = image.webformatURL;

      const imageItem = { src, id, user, tags, thumbnail, index };

      this.imagesLightbox.push(imageItem);
      this.imagesList = this.imagesLightbox.map(image => (
        <Image key={image.id} image={image} slider={this.handleSlider} />
      ));
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <ImagesWrapper>
        {this.imagesList}

        {isOpen && (
          <Lightbox
            mainSrc={this.imagesLightbox[photoIndex].src}
            nextSrc={
              this.imagesLightbox[(photoIndex + 1) % this.imagesLightbox.length]
                .src
            }
            prevSrc={
              this.imagesLightbox[
                (photoIndex + this.imagesLightbox.length - 1) %
                  this.imagesLightbox.length
              ].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.imagesLightbox.length - 1) %
                  this.imagesLightbox.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.imagesLightbox.length
              })
            }
          />
        )}
      </ImagesWrapper>
    );
  }
}

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  @media (min-width: 576px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
  }
`;
