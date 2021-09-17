import React from 'react';

export interface DataProps {
  id: number | string;
  name: string;
}

export interface SelectProps {
  value: any;
  placeholder?: string;
  onChange: (e: DataProps) => any;
  data?: DataProps[];
}
