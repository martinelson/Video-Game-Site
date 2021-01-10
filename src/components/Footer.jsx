import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div`
    padding: 2rem;
    text-align: center;
    @media (max-width: 550px) {
        p{
            font-size: 10px;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>Copyright &copy; Martin Nelson</p>
        </StyledFooter>
    )
}
