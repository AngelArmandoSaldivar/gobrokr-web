import React from 'react';
import { SignInProps } from '../../types';

export interface CredentialsProps extends SignInProps {
  children: React.ReactNode;
  title: string;
  isFullScreen?: boolean;
}
