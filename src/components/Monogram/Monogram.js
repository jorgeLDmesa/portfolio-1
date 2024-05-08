import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      className={classes(styles.monogram, className)}
      width="40"
      height="40"
      viewBox="0 0 30 30.000001"
      zoomAndPan="magnify"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 7.261719 2.902344 L 22.503906 2.902344 L 22.503906 26.128906 L 7.261719 26.128906 Z M 7.261719 2.902344" clipRule="nonzero" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path 
          className={styles.path} // Usa una clase adicional si necesitas estilos adicionales
          d="M 21.996094 2.914062 L 18.441406 2.914062 C 18.160156 2.914062 17.933594 3.144531 17.933594 3.429688 L 17.933594 18.789062 C 17.933594 20.464844 16.667969 21.925781 15.023438 21.988281 C 13.273438 22.058594 11.835938 20.652344 11.835938 18.898438 C 11.835938 18.613281 11.609375 18.382812 11.328125 18.382812 L 7.769531 18.382812 C 7.488281 18.382812 7.261719 18.621094 7.261719 18.910156 C 7.269531 22.882812 10.683594 26.117188 14.882812 26.117188 C 19.085938 26.117188 22.503906 22.878906 22.503906 18.898438 L 22.503906 3.429688 C 22.503906 3.144531 22.277344 2.914062 21.996094 2.914062 Z"
        />
        {highlight && (
          <rect className={styles.highlight} width="100%" height="100%" />
        )}
      </g>
    </svg>
  );
});