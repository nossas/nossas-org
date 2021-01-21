import React from 'react';
import styled  from '@emotion/styled'

interface Styles {
  padding?: string | number
  margin?: string | number
}

interface Props extends Styles {
  component: any
}

const space = (value: any): string => typeof value === 'string' ? value : `${value}px`;

const View: React.FC<Props> = ({ component, ...ownProps }) => {
  const ComponentStyled = styled(component)<Styles>`
    background-color: lightblue;
    ${props => props.padding && `
      padding: ${space(props.padding)};
    `}
    ${props => props.margin && `
      margin: ${space(props.padding)};
    `}
  `

  return <ComponentStyled {...ownProps} />
}

export default View;