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
			   className={`px-4 py-2 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500
				 ${variant === 'solid' ? 'bg-blue-600 text-white hover:bg-purple-700' : ''}
				 ${variant === 'outline' ? 'border border-blue-600 text-blue-600 hover:bg-blue-50' : ''}
				 ${variant === 'ghost' ? 'bg-transparent text-blue-600 hover:bg-blue-100' : ''}
			   `}
			   disabled={disabled || loading}
			   onClick={onClick}
			   aria-label={ariaLabel}
			   aria-busy={loading}
			   tabIndex={0}
		   >
			   {loading ? <span className="animate-pulse" aria-hidden="true">...</span> : children}
		   </button>
	);
}
