import React from 'react';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5px;
  align-items: center;
  justify-items: center;

  width: ${({ width }) => width || '100%'}
  height: ${({ height }) => height || '50px'}

  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  outline: none;

  background: ${({ theme }) => theme.background.main};
  color: ${({ theme, main }) => main || theme.color.main};

  ${Icon}.stroke {
    path {
      stroke: ${({ theme, main }) => main || theme.color.main};
    }
  }
  ${Icon}.fill {  
    path {
      fill: ${({ theme, main }) => main || theme.color.main};
    }
  }

  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:hover {
      color: ${theme.color.hover || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${theme.color.hover || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${theme.color.hover || theme.color.main};
        }
      }

      background: ${theme.background.hover || theme.background.main};
    }
  `}
  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:active, &:focus {
      color: ${theme.color.focus || theme.color.main};
      ${Icon}.stroke {
        path {
          stroke: ${theme.color.focus || theme.color.main};
        }
      }
      ${Icon}.fill {
        path {
          fill: ${theme.color.focus || theme.color.main};
        }
      }

      background: ${theme.background.focus || theme.background.main};
    }
  `}

  ${({ primary, secondary, disabled, flat }) =>
    (primary || secondary || disabled || flat) &&
    `
    box-shadow: none;
  `}

  ${({ disabled, secondary }) =>
    disabled &&
    !secondary &&
    `
    cursor: initial;
    border: none;
    background: #d1cdd2;
    color: #fff;

    ${Icon}.stroke {
      path {
        stroke: #fff;
      }
    }
    ${Icon}.fill {
      path {
        fill: #fff;
      }
    }
  `}
`;

const Button = (props: ButtonProps) => {
  const keyTheme = props.primary ? 'primary' 
    : props.secondary ? 'secondary' 
    : props.flat ? 'flat' 
    : 'primary' // default

  const customTheme = {
    fontFamily: theme.fontFamily,
    ...(theme[keyTheme] || {}),
  };

  return <ButtonStyled {...props} theme={customTheme} />;
};

export default Button

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  flat: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  onClick: undefined,
};
