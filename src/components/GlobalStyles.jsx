import React from "react";

export const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    :root {
      --grid-unit: 8px;
      --menu-width: 200px;
      --linky-blue: rgb(37, 99, 235);
      --fill-color: #EAF2EF;
      --outline-color: #0D090A;
      --transition-timing: 0.2s ease-out;
    }

    body {
      background-color: white;
      color: black;
      font-family: "Helvetica Neue", sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.5;
    }

    .video-container {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    .video-container video {
      width: 100%;
      height: auto;
      display: block;
    }

    .nav {
      position: fixed;
      top: calc(var(--grid-unit) * 3);
      left: calc(var(--grid-unit) * 3);
      width: var(--menu-width);
      font-size: 24px;
      line-height: 1;
      padding-right: calc(var(--grid-unit) * 3);
      z-index: 1000;
      background: white;
    }

    .nav ul {
      display: flex;
      flex-direction: column;
      gap: calc(var(--grid-unit) * 1.5);
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .nav a {
      display: block;
      color: black;
      text-decoration: none;
      -webkit-text-stroke: 1px #4b5563;
      text-stroke: 1px #4b5563;
      transition: all var(--transition-timing);
    }

    .nav a:hover {
      color: #F0F0F0 !important;
      -webkit-text-stroke: 1px #F0F0F0 !important;
      text-stroke: 1px #F0F0F0 !important;
    }

    .asterisk {
      position: fixed;
      top: calc(var(--grid-unit) * 3);
      right: calc(var(--grid-unit) * 3);
      color: var(--fill-color) !important;
      -webkit-text-stroke: 1px var(--outline-color) !important;
      text-stroke: 1px var(--outline-color) !important;
      transition: none !important;
      z-index: 1000;
    }

    .asterisk::after {
      content: "clickme~";
      position: absolute;
      top: -12px;
      right: 0;
      font-family: "Times New Roman", serif;
      font-size: 8pt;
      color: var(--outline-color);
      white-space: nowrap;
      -webkit-text-stroke: 0 !important;
      text-stroke: 0 !important;
      font-weight: normal;
    }

    .work-view-toggle {
      position: fixed;
      top: calc(var(--grid-unit) * 3);
      right: calc(var(--grid-unit) * 8);
      background: none;
      border: none;
      padding: calc(var(--grid-unit));
      cursor: pointer;
      z-index: 1000;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: bold;
      color: var(--fill-color);
      -webkit-text-stroke: 1px var(--outline-color);
      text-stroke: 1px var(--outline-color);
    }

    .fullscreen-view {
      position: fixed;
      top: 0;
      left: var(--menu-width);
      right: 0;
      bottom: 0;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: calc(var(--grid-unit) * 3);
    }

    .fullscreen-view .image-container {
      position: relative;
      width: min(80vh, 80vw);
      height: min(80vh, 80vw);
    }

    .fullscreen-view .square-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: calc(var(--grid-unit) / 2);
    }

    .gallery-view {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: calc(var(--grid-unit) * 8);
      padding-left: calc(var(--menu-width) + var(--grid-unit) * 3);
      padding-right: calc(var(--grid-unit) * 3);
      padding-bottom: 0;
      overflow-y: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .gallery-view::-webkit-scrollbar {
      display: none;
    }

    .gallery-grid {
      position: relative;
      height: auto;
      min-height: 100%;
      padding-bottom: calc(var(--grid-unit) * 3);
    }

    .gallery-item {
      position: absolute;
      border-radius: calc(var(--grid-unit) / 2);
      overflow: hidden;
    }

    .gallery-item .image-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .navigation-arrow {
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
      color: var(--fill-color);
      font-size: 24px;
      line-height: 1;
      font-family: system-ui;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      opacity: 0.8;
      transition: opacity 0.2s ease-out;
      z-index: 1000;
      transform: translateY(-50%);
      -webkit-text-stroke: 1px var(--outline-color);
      text-stroke: 1px var(--outline-color);
    }

    .navigation-arrow:hover {
      opacity: 1;
    }

    img {
      max-width: 100%;
      height: 100%;
      display: block;
      user-select: none;
      -webkit-user-drag: none;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      :root {
        --menu-width: 100%;
      }

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

      .nav a {
        font-size: 20px;
        padding: calc(var(--grid-unit));
      }

      .asterisk {
        top: auto;
        bottom: calc(var(--grid-unit) * 3);
      }

      .work-view-toggle {
        top: auto;
        bottom: calc(var(--grid-unit) * 3);
      }

      .fullscreen-view {
        left: 0;
        padding: calc(var(--grid-unit) * 2);
        padding-top: calc(var(--grid-unit) * 8);
      }

      .gallery-view {
        position: absolute;
        padding: calc(var(--grid-unit) * 2);
        padding-top: calc(var(--grid-unit) * 12);
        padding-bottom: calc(var(--grid-unit) * 8);
        left: 0;
      }

      .gallery-grid {
        display: flex;
        flex-direction: column;
        gap: calc(var(--grid-unit) * 2);
      }

      .gallery-item {
        position: relative !important;
        width: 100% !important;
        left: 0 !important;
        top: 0 !important;
        transform: none !important;
      }

      .gallery-item .image-wrapper {
        aspect-ratio: 1;
      }
    }

    @media (max-width: 480px) {
      .nav {
        padding: var(--grid-unit);
      }

      .nav a {
        font-size: 16px;
      }

      .gallery-view {
        padding: var(--grid-unit);
        padding-top: calc(var(--grid-unit) * 10);
        padding-bottom: calc(var(--grid-unit) * 8);
      }
    }
  `}} />
);
