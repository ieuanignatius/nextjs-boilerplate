import React from 'react';
import cn from 'classnames';

import styles from './Img.module.scss';

interface ImgProps extends React.ComponentProps<'img'> {
  alt: string;
  className?: string;
  external?: boolean;
  src: string;
}

const Img = (props: ImgProps) => {
  const { alt, className, external, src, ...rest } = props;
  return (
    <img
      alt={alt}
      className={cn(styles.img, className)}
      src={external ? src : `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}${src}`}
      {...rest}
    />
  );
};

Img.defaultProps = {
  external: false,
};

export default Img;
