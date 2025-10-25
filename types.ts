
import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}
