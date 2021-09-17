import React from 'react';

export interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (e: any) => any;
}

export interface InputProps {
  focused?: boolean;
}
