import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="0.511111in" // Use the provided width
      height="0.511111in" // Use the provided height
      viewBox="0 0 46 46" // Update the viewBox to match the new SVG dimensions
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d="M 33.24,23.78
            C 31.24,21.13 28.05,19.40 24.48,19.40
              24.48,19.40 21.90,19.40 21.90,19.40
              20.41,19.40 19.18,18.17 19.18,16.67
              19.18,16.67 19.18,16.40 19.18,16.40
              19.18,14.91 20.41,13.68 21.90,13.68
              21.90,13.68 25.59,13.68 25.59,13.68
              29.86,13.68 33.32,10.10 33.32,5.45
              33.32,5.45 21.90,5.45 21.90,5.45
              15.87,5.45 10.96,10.37 10.96,16.40
              10.96,16.40 10.96,16.67 10.96,16.67
              10.96,19.13 11.76,21.40 13.15,23.24
              15.14,25.89 18.29,27.62 21.90,27.62
              21.90,27.62 24.48,27.62 24.48,27.62
              25.94,27.62 27.21,28.85 27.21,30.31
              27.21,30.31 27.21,30.62 27.21,30.62
              27.21,32.08 25.94,33.35 24.48,33.35
              24.48,33.35 19.87,33.35 19.87,33.35
              15.60,33.35 12.15,36.88 12.15,41.53
              12.15,41.53 24.48,41.53 24.48,41.53
              30.51,41.53 35.43,36.65 35.43,30.62
              35.43,30.62 35.43,30.31 35.43,30.31
              35.43,27.89 34.62,25.62 33.24,23.78 Z
            M 33.24,23.78"
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
