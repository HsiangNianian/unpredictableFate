import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

const config: DocsThemeConfig = {
  toc: {
    backToTop: true
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      // if (type === 'separator') {
      //   return <span className="cursor-default">{title}</span>;
      // };

      // if (title === 'latest') {
      //   return (
      //     <span>
      //       {title} <FontAwesomeIcon icon={faFileImport} size="2xs" shake fade />
      //     </span>
      //   );
      // }

      return <>{title}</>;
    },
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  banner: {
    key: '2.0-release',
    text: <a href="https://unpredictablefate.jyunko.cn/blog/v2" target="_blank">
      🎉 unpredictableFate 2.0 is released. Read more →
    </a>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – unPF'
    }
  },
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 640 512">
        <path
          fill="currentColor"
          d="M447.1 224c0-12.56-4.781-25.13-14.35-34.76l-174.9-174.9C249.1 4.786 236.5 0 223.1 0C211.4 0 198.9 4.786 189.2 14.35L14.35 189.2C4.783 198.9-.0011 211.4-.0011 223.1c0 12.56 4.785 25.17 14.35 34.8l174.9 174.9c9.625 9.562 22.19 14.35 34.75 14.35s25.13-4.783 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S120 210.8 120 224S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S248 210.8 248 224S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248zM591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        unpredictableFate
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/HsiangNianian/unpredictableFate',
  },
  chat: {
    link: 'https://jq.qq.com/?_wv=1027&k=3UKm5KZJ',
    icon: <svg width="24" height="24" viewBox="0 0 448 512"><path fill="currentColor" d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z" /></svg>,
  },
  docsRepositoryBase: 'https://github.com/HsiangNianian/unpredictableFate/tree/main/',
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://nextra.site" target="_blank">unpredictableFate</a>.
    </span>,
  },
  navigation: {
    prev: true,
    next: true
  }
}
export default config
