import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 128rem;
    min-width: 128rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

export const Page = styled.div`
  position: absolute;
  &.page-enter {
    opacity: 0;
  }
  &.page-enter-active {
    opacity: 1;
    transition: opacity 400ms;
    transition-delay: 600ms;
  }
  &.page-exit {
    opacity: 1;
  }
  &.page-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
`;

export const Inner = styled.div`
    display: flex;
    justify-content: center;
`;

export const Info = styled.p`
    margin-top: 20rem;
    width: 34rem;
    font-weight: 300;
    line-height: 2.4rem;
    font-size: 1.4rem;
`;