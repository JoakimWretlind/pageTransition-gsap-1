import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Headers = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    a{
        margin: 0 2rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const NavLinks = styled(NavLink)``;


export const PageTitle = styled.h1`
    font-family: 'Bebas Neue';
    font-size: 5.2rem;
    letter-spacing: .2rem;
`;

export const LineWrap = styled.div`
    overflow: hidden;
    height: 6.6rem;
`;

export const Line = styled.div``;