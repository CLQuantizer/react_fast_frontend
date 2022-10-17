import React from 'react';
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import logo from './redis.svg';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const RedisLogo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 10s linear`;

  return <Image width={35} animation={animation} src={logo} {...props} />;
};
