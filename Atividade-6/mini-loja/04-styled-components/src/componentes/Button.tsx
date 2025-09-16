import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

const solid = css`
  background: #2563eb;
  color: #fff;
  &:hover {
    background: #7c1ef8;
  }
`;
const outline = css`
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
  &:hover {
    background: #e0e7ff;
  }
`;
const ghost = css`
  background: transparent;
  color: #2563eb;
  &:hover {
    background: #f3f4f6;
  }
`;

const StyledButton = styled.button<{ variant?: string }>`
  padding: 0.6em 1.4em;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(37,99,235,0.08);
  ${(props) => props.variant === 'solid' && solid}
  ${(props) => props.variant === 'outline' && outline}
  ${(props) => props.variant === 'ghost' && ghost}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default function Button({
  children,
  variant = 'solid',
  disabled = false,
  loading = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
      tabIndex={0}
    >
      {loading ? <span style={{ opacity: 0.7 }}>...</span> : children}
    </StyledButton>
  );
}