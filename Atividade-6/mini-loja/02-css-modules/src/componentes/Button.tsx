import styles from './Button.module.css';
import React from 'react';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'solid' | 'outline' | 'ghost';
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	ariaLabel?: string;
	
};

export default function Button({
	
	children,
	variant = 'solid',
	disabled = false,
	loading = false,
	onClick,
	ariaLabel,
}: ButtonProps) {
	return (
		   <button
			   className={`${styles.btn} ${styles['btn--' + variant]}`}
			   disabled={disabled || loading}
			   onClick={onClick}
			   aria-label={ariaLabel}
			   aria-busy={loading}
			   tabIndex={0}
		   >
			   {loading ? <span className={styles.btn__loader} aria-hidden="true">...</span> : children}
		   </button>
	);
}
