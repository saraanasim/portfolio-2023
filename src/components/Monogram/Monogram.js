import { forwardRef } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ className, ...props }, ref) => {

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="80"
      height="80"
      viewBox="0 0 20 30"
      ref={ref}
      {...props}
    >
      <path className={classes(styles.monogram, className)} d="M11.106 18.592c-2.215 0-5.077-.914-7.324-2.133v6.022A18.597 18.597 0 0 0 11.102 24c5.564 0 9.398-2.39 9.398-7.198 0-7.976-10.229-6.547-10.229-9.556l-.001-.001c0-1.045.873-1.448 2.271-1.448 2.036 0 4.621.623 6.658 1.72V1.223C16.981.337 14.766 0 12.547 0 7.118 0 3.5 2.83 3.5 7.564c0 7.401 10.173 6.201 10.173 9.392 0 1.238-1.074 1.636-2.567 1.636z">
      </path>
    </svg>

  );
});
