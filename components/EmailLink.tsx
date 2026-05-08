'use client';

import React, { useState, useEffect } from 'react';

interface EmailLinkProps {
  email: string;
  className?: string;
  showIcon?: boolean;
}

/**
 * A component that obfuscates email addresses to prevent scraping.
 * It ensures the same tag (<a>) is used on server and client to avoid hydration errors.
 */
export default function EmailLink({ email, className, showIcon = false }: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Obfuscate the email for SSR and first client render
  const displayEmail = mounted ? email : email.replace('@', ' [at] ').replace(/\./g, ' [dot] ');
  const href = mounted ? `mailto:${email}` : '#';

  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        if (!mounted) e.preventDefault();
      }}
    >
      {showIcon && <span style={{ marginRight: '8px' }}>✉️</span>}
      {displayEmail}
    </a>
  );
}
