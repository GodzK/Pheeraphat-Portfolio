'use client';

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.id} className="navbar-item">
            <button
              className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
              data-nav-link
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 