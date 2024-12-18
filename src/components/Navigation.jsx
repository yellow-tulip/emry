import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="nav">
      <style>{`
        .nav {
          background: transparent;
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1000;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          background: transparent;
          line-height: 0.75;
        }

        .nav-link {
          font-size: 30px;
          text-decoration: none;
          display: block;
          padding: 2.5px 0;
          line-height: 0.25;
          transition: opacity var(--transition-timing);
          color: var(--fill-color);
          -webkit-text-stroke: 1px var(--outline-color);
          text-stroke: 1px var(--outline-color);
          opacity: 0.6;
        }

        .nav-link:hover {
          opacity: 1;
        }

        .home-link {
          font-size: 32px;
          font-weight: bold;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: calc(var(--grid-unit) * 2);
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .nav ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: calc(var(--grid-unit) * 2);
          }

          .nav-link {
            font-size: 20px;
            padding: calc(var(--grid-unit));
          }
        }

        @media (max-width: 480px) {
          .nav {
            padding: var(--grid-unit);
          }

          .nav-link {
            font-size: 16px;
          }
        }
      `}</style>
      <ul>
        <li>
          <Link to="/" className="nav-link home-link">✼</Link>
        </li>
        <li>
          <Link to="/work" className="nav-link">work</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">about</Link>
        </li>
      </ul>
    </nav>
  );
};
