import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const WebDevIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
  </svg>
);

export const EcommerceIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.44a1.125 1.125 0 0 0-.442-1.29l-6.17-3.702a1.125 1.125 0 0 0-1.29 0L7.22 7.72a1.125 1.125 0 0 0-.442 1.29l1.823 6.44Z" />
    </svg>
);

export const SocialMediaIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

export const BrandingIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118 2.25 2.25 0 0 1-2.47-2.118c0-1.02.492-1.947 1.272-2.584m12.232-7.342a3 3 0 0 1-5.78-1.128 2.25 2.25 0 0 0-2.47-2.118 2.25 2.25 0 0 0-2.47 2.118c0 1.02-.492 1.947-1.272 2.584" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.53 16.122-6-6 6-6 6 6-6 6Zm-6-6 6 6-6-6Zm6 6 6-6-6 6Z" />
    </svg>
);

export const SeoIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5m3-1.5v1.5m3-1.5v1.5M12 11.25a1.5 1.5 0 0 0-1.5 1.5v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1.5Z" />
    </svg>
);

export const VideoIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
    </svg>
);

export const SoftwareIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5 3 11.25l3.75 3.75M17.25 7.5 21 11.25l-3.75 3.75M14.25 3.75 9.75 20.25" />
    </svg>
);

export const BookIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5V18" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

export const LocationIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.52 1.34 5.05l-1.4 5.02 5.13-1.35c1.48.81 3.15 1.24 4.84 1.24h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2zM12.04 20.25c-1.55 0-3.05-.44-4.33-1.25l-.31-.18-3.21.84.86-3.11-.2-.32a8.38 8.38 0 0 1-1.3-4.52c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24zm4.49-6.17c-.24-.12-1.42-.7-1.64-.78-.23-.08-.39-.12-.56.12-.17.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.71-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.37.1-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.48c-.17 0-.45.06-.68.3s-.89.87-.89 2.12.91 2.46 1.04 2.64c.12.18 1.81 2.76 4.38 3.86.6.26 1.07.41 1.44.53.61.2 1.17.16 1.62.1.49-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 4.98 3.66 9.12 8.44 9.88v-7H7.9v-2.89h2.54V9.57c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9H13.7v7.02c4.78-.77 8.44-4.9 8.44-9.88C22 6.53 17.5 2.04 12 2.04z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.42.47-.65.25-1.23.59-1.79 1.15-.56.56-.9 1.14-1.15 1.79-.25.63-.42 1.36-.47 2.42C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.42.25.65.59 1.23 1.15 1.79.56.56 1.14.9 1.79 1.15.63.25 1.36.42 2.42.47 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.42-.47.65-.25 1.23-.59 1.79-1.15.56-.56.9-1.14 1.15-1.79.25-.63.42-1.36.47-2.42.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.42-.25-.65-.59-1.23-1.15-1.79-.56-.56-1.14-.9-1.79-1.15-.63-.25-1.36-.42-2.42-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.98.01 4.04.06 1.02.05 1.58.21 1.96.37.49.2.82.43 1.18.79.36.36.59.69.79 1.18.16.38.32.94.37 1.96.05 1.06.06 1.37.06 4.04s-.01 2.98-.06 4.04c-.05 1.02-.21 1.58-.37 1.96-.2.49-.43.82-.79 1.18-.36.36-.69.59-1.18.79-.38.16-.94.32-1.96.37-1.06.05-1.37.06-4.04.06s-2.98-.01-4.04-.06c-1.02-.05-1.58-.21-1.96-.37-.49-.2-.82-.43-1.18-.79-.36-.36-.59-.69-.79-1.18-.16-.38-.32-.94-.37-1.96-.05-1.06-.06-1.37-.06-4.04s.01-2.98.06-4.04c.05-1.02.21-1.58.37-1.96.2-.49.43.82.79-1.18.36-.36.69-.59-1.18.79.38-.16.94-.32 1.96-.37 1.06-.05 1.37-.06 4.04-.06zm0 4.47c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35 3.35-1.5 3.35-3.35-1.5-3.35-3.35-3.35zm0 5.5c-1.19 0-2.15-.96-2.15-2.15s.96-2.15 2.15-2.15 2.15.96 2.15 2.15-.96 2.15-2.15 2.15zm6.32-6.95c-.53 0-.96.43-.96.96s.43.96.96.96.96-.43.96-.96-.43-.96-.96-.96z"/>
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 5H5v11h3V8zm-1.5-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 2.5H14v1.57c.45-.8 1.5-1.57 3.1-1.57 3.3 0 3.9 2.1 3.9 4.9V19h-3v-4.74c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.8 1.17-1.8 2.5v4.82h-3V8z" />
  </svg>
);

export const TikTokIcon: React.FC<IconProps> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.28-1.1-.63-1.62-1.02-.35-.26-.7-.59-1.02-.96-.02-1.29-.09-2.58-.14-3.86-.09-2.01-.14-4.03.04-6.04.04-.45.12-.89.27-1.32zm-3.37 5.76c.01 1.34.02 2.67 0 4.01-.03 2.52-.39 4.99-1.39 7.23-1.02 2.29-2.69 4.23-4.83 5.48-1.86 1.06-4.04 1.48-6.3 1.03v-4.17c1.78.22 3.53.18 5.2-.34 1.37-.41 2.57-1.2 3.55-2.26.96-1.04 1.63-2.28 1.94-3.66.19-.84.28-1.71.32-2.57.08-1.55.03-3.1.08-4.65h3.8z"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// Fix: Adding QuoteIcon to fix import error in Testimonials.tsx
export const QuoteIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);