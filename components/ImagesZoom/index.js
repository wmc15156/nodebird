import Slick from 'react-slick';
import { useState } from 'react';
import { CloseButton, Global, Header, ImageWrapper, Indicator, Overlay, SlickWrapper } from './styles';

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            sidesToScroll={1}
          >
            {images.map((v) => (
              <ImageWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImageWrapper>
            ))}
          </Slick>
          <Indicator>
            {currentSlide + 1} /{images.length}
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;
