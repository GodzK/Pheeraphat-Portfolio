'use client';

import { useState } from 'react';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  const socials = [
    {
      name: 'Instagram',
      icon: <FaInstagram size={36} color="#fff" />,
      url: 'https://instagram.com/yourusername',
      bg: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={36} color="#fff" />,
      url: 'https://github.com/yourusername',
      bg: 'linear-gradient(135deg, #333 0%, #444 100%)',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook size={36} color="#fff" />,
      url: 'https://facebook.com/yourusername',
      bg: 'linear-gradient(135deg, #1877f3 0%, #4e69a2 100%)',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={36} color="#fff" />,
      url: 'https://linkedin.com/in/yourusername',
      bg: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
    },
  ];

  return (
    <>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
            background: 'var(--eerie-black2)',
            borderRadius: 20,
            padding: 32,
            boxShadow: 'var(--shadow2)',
            maxWidth: 400,
            width: '100%',
          }}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: s.bg,
                borderRadius: 16,
                padding: 24,
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'transform 0.15s',
                textDecoration: 'none',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.07)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {s.icon}
              <span style={{ marginTop: 12 }}>{s.name}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
} 