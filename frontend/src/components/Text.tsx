import React, { ReactNode } from 'react';
import styled, { CSSObject } from 'styled-components';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

// Tipos para as propriedades do componente
interface TextProps {
  variant?: Variant;
  color?: string;
  align?: 'left' | 'center' | 'right';
  style?: CSSObject;
  children: ReactNode;
  // Outras propriedades que você quiser adicionar
}

// Mapeamento de estilos para cada variante de texto
const variantMapping: { [key in Variant]: CSSObject } = {
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
};

// Componente de texto reutilizável
const Text: React.FC<TextProps> = ({
  variant = 'body1',
  color = 'inherit',
  align = 'left',
  children,
  style,
}) => {
  const mappedStyle = variantMapping[variant];

  const TextComponent = styled.div`
    color: ${color};
    text-align: ${align};
    ${mappedStyle}
    ${style}
  `;

  return <TextComponent>{children}</TextComponent>;
};

export default Text;
