// components/common/Loading.tsx
import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

function Loading() {
    return (
        <LoaderWrapper>
          <Spinner />
          <LoadingText>Loading Projects...Please Wait!</LoadingText>
        </LoaderWrapper>
    );
};  

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--accent-color, #0077ff);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--text-muted, #666);
`;



export default Loading;
