import { Component, useCallback, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import * as PropTypes from 'prop-types';
import ImagesZoom from '../ImagesZoom';
import { createGlobalStyle } from 'styled-components';



const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, [showImagesZoom]);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img role="presentation" style={{ width: '50%' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img role="presentation" style={{ width: '50%' }} src={images[1].src} alt={images[1].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      <div
        onClick={onZoom}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'center',
        }}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}개 더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
};

export default PostImages;
