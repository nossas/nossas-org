import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

/**
 * Primary UI component for user interaction
 */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

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

  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:hover {
      color: ${theme.color.hover || theme.color.main};
      background: ${theme.background.hover || theme.background.main};
    }
  `}
  ${({ disabled, theme }) =>
    !disabled &&
    `
    &:active, &:focus {
      color: ${theme.color.focus || theme.color.main};
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
  `}
`;

const Button = ({ primary, secondary, flat, theme, ...props  }) => {
  console.log({ theme })
  const keyTheme = primary ? 'primary' 
    : secondary ? 'secondary' 
    : flat ? 'flat' 
    : 'primary' // default

  const customTheme = {
    fontFamily: theme.fontFamily,
    ...(theme[keyTheme] || {}),
  }

  console.log(customTheme)

  return <ButtonStyled {...props} theme={customTheme} />
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   primary: false,
//   size: 'medium',
//   onClick: undefined,
// };

Button.propTypes = {
  /**
   * Default button style
   */
  primary: PropTypes.bool,
  /**
   * Secondary button style (outilined)
   */
  secondary: PropTypes.bool,
  /**
   * Only text button style
   */
  flat: PropTypes.bool,
  /**
   * Accepts onClick function
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};

export default withTheme(Button)
