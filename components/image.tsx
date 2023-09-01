import React from 'react';

const Image = ({ src, ...rest }) => {
  const newSrc = src.replace('/image', '../../../public/image/命运无常异能世界规则书');
  return <img src={newSrc} {...rest} />;
};

export default Image;
