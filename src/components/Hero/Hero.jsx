import styles from './Hero.module.css'
import { NavLink } from 'react-router-dom'
import Blob from '../Blob/Blob'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.symbols}>
          {/* Globe */}
          <div className={styles.svgContainer}>
            <svg
              id='Layer_2'
              data-name='Layer 2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 42.97 42.91'
              width='40'
            >
              <defs>
                <style>
                  {`.cls-1 {
        fill: #4d4d4d;
        stroke-width: 0px;
      }`}
                </style>
              </defs>
              <g id='Layer_1-2' data-name='Layer 1'>
                <path
                  className='cls-1'
                  d='m0,21.44C0,9.59,9.63,0,21.51,0c11.86,0,21.48,9.64,21.46,21.49-.02,11.87-9.66,21.44-21.58,21.42C9.6,42.9,0,33.26,0,21.44Zm22,5.63h7.45c.11-1.71.21-3.4.32-5.1h-7.77v5.1Zm-8.8-5.12c.11,1.74.22,3.43.33,5.12h7.41v-5.12h-7.75Zm8.82-6.11v5.12h7.75c-.11-1.73-.22-3.41-.33-5.12h-7.42Zm-1.06.02h-7.44c-.11,1.72-.21,3.41-.31,5.1h7.76v-5.1Zm1.06-6.18v5.12h7.3c-.36-1.75-.71-3.45-1.05-5.12h-6.25Zm6.25,23.57c.35-1.7.69-3.39,1.04-5.12h-7.31v5.12h6.27Zm-7.32,0v-5.12h-7.31c.36,1.75.71,3.43,1.05,5.12h6.26Zm0-18.44v-5.14h-6.26c-.35,1.7-.69,3.39-1.05,5.14h7.31Zm9.76,6.15h5.25c-.18-1.74-.36-3.44-.53-5.11h-5.01c.1,1.72.2,3.4.3,5.11Zm0,.99c-.1,1.71-.2,3.4-.3,5.13h5.01c.18-1.7.35-3.4.53-5.13h-5.24Zm-18.46,0h-5.25c.18,1.74.36,3.44.53,5.11h5.01c-.1-1.72-.2-3.4-.3-5.11Zm-5.25-1.01h5.25c.1-1.72.19-3.4.29-5.11h-5.01c-.18,1.7-.35,3.38-.53,5.11Zm34.24-5.12h-4.87c.18,1.73.36,3.43.53,5.13h5.1c-.01-1.76-.3-3.44-.76-5.13ZM6.59,27.09c-.18-1.75-.36-3.45-.54-5.15H.95c.02,1.78.3,3.48.77,5.15h4.86ZM1.72,15.83c-.45,1.7-.76,3.38-.76,5.13h5.09c.18-1.73.36-3.41.53-5.13H1.72Zm35.2,6.11c-.18,1.74-.36,3.43-.54,5.15h4.87c.46-1.69.75-3.38.76-5.15h-5.09Zm-14.92-13.27h5.89c-.59-1.88-1.35-3.6-2.43-5.14h-3.46v5.14Zm-1.02,25.56h-5.89c.59,1.88,1.35,3.61,2.44,5.15h3.45v-5.15Zm0-25.55V3.53h-3.47c-1.08,1.56-1.86,3.28-2.43,5.16h5.9Zm1.01,30.7h3.47c1.09-1.57,1.86-3.29,2.43-5.15h-5.89v5.15Zm13.23-11.28h-4.92c-.35,1.72-.7,3.41-1.05,5.13h4.14c.6-1.68,1.2-3.38,1.83-5.13Zm-4.93-13.31h4.82c-.44-1.8-1.01-3.52-1.85-5.13h-4.02c.35,1.72.7,3.41,1.05,5.13Zm-20.59-5.14c-.83,1.63-1.41,3.34-1.84,5.13h4.81c.35-1.73.7-3.41,1.05-5.13h-4.02Zm-1.96,18.43c.65,1.8,1.25,3.49,1.85,5.15h4.14c-.35-1.73-.7-3.43-1.05-5.15h-4.93Zm-.96-13.28c.6-1.75,1.18-3.44,1.77-5.15h-3.88c-1.12,1.59-1.99,3.28-2.62,5.15h4.73Zm27.65-5.16c.59,1.72,1.18,3.42,1.77,5.14h4.74c-.66-1.87-1.51-3.58-2.63-5.14h-3.87Zm1.77,18.43c-.6,1.75-1.18,3.44-1.77,5.15h3.88c1.12-1.59,1.99-3.28,2.62-5.15h-4.73Zm-31.54,5.14h3.88c-.59-1.72-1.17-3.41-1.76-5.12H2.04c.64,1.86,1.5,3.55,2.61,5.12Zm28.09-24.53c-.07-.15-.1-.24-.15-.32-.91-1.54-2.03-2.9-3.28-4.19-.8-.82-1.69-.72-2.58-.67.77,1.73,1.53,3.44,2.3,5.18h3.71Zm-22.54,25.53c.99,1.75,2.19,3.22,3.54,4.58.8.8,1.66.58,2.49.59-.77-1.73-1.52-3.44-2.29-5.17h-3.74Zm18.82,0c-.79,1.77-1.54,3.47-2.31,5.2.33,0,.69-.03,1.04,0,.51.06.89-.14,1.27-.47,1.44-1.29,2.6-2.79,3.58-4.44.05-.08.07-.17.12-.29h-3.7ZM10.17,8.56s.09.09.14.13h3.64c.78-1.75,1.53-3.45,2.31-5.2-.36,0-.76.02-1.16,0-.42-.03-.76.09-1.05.39-.53.55-1.13,1.04-1.61,1.64-.79.98-1.51,2.03-2.26,3.05Zm27.29.13c0-.06.01-.1,0-.12-.09-.12-.18-.24-.27-.35-1.48-1.75-3.22-3.19-5.16-4.4-.65-.4-1.29-.32-2.11-.31,1.67,1.59,2.92,3.32,3.92,5.18h3.63ZM5.41,34.23c.17.21.28.36.4.51,1.49,1.74,3.22,3.18,5.17,4.38.64.39,1.26.28,2.06.29-1.66-1.6-2.93-3.32-3.92-5.18h-3.72Zm28.41,0c-.99,1.89-2.26,3.59-3.77,5.18.59,0,1.23.05,1.7-.2,2.08-1.14,3.86-2.67,5.4-4.47.12-.14.23-.29.4-.51h-3.73ZM9.14,8.69c1-1.91,2.27-3.6,3.77-5.19-.58,0-1.21-.06-1.67.19-2.12,1.15-3.92,2.7-5.47,4.54-.11.13-.2.27-.35.46h3.73Zm12.84-6.17h2.64c-.79-.8-1.57-1.38-2.64-1.52v1.52Zm-1-1.53c-1.07.17-1.85.74-2.63,1.53h2.63V.99Zm-.01,40.93v-1.53h-2.63c.79.79,1.57,1.36,2.63,1.53Zm3.65-1.53h-2.61v1.54c1.06-.2,1.84-.74,2.61-1.54ZM26.85,2.53s.03-.08.04-.12c-.57-.28-1.14-.55-1.71-.83-.02.03-.05.07-.07.1.27.29.54.58.78.85h.96Zm-10.72,37.84s-.04.08-.05.12c.57.28,1.14.56,1.71.84.02-.04.04-.07.06-.11-.26-.28-.52-.57-.77-.84h-.95Zm.97-37.84c.25-.28.5-.57.76-.85-.03-.03-.05-.06-.08-.09-.57.28-1.13.56-1.7.84l.04.11h.98Zm8.03,38.68s.04.08.06.12c.57-.28,1.14-.56,1.71-.85-.02-.03-.03-.07-.05-.1h-.97c-.26.28-.51.56-.75.83ZM28.26,2.08s-.04.09-.05.14c.31.13.63.27.94.4.02-.06.05-.11.07-.17-.32-.12-.64-.24-.95-.36Zm-14.49.34c.02.06.02.08.03.11.32-.09.64-.18.96-.28-.02-.06-.04-.12-.06-.17-.31.11-.62.23-.93.34Zm.92,38.4c.02-.05.04-.1.06-.15l-.92-.37c-.02.05-.04.11-.06.16.31.12.62.23.93.35Zm14.52-.35c-.03-.06-.05-.13-.08-.19-.3.14-.6.28-.9.42.02.04.04.08.05.12.31-.12.62-.24.93-.35Z'
                />
              </g>
            </svg>
          </div>

          {/* Squares */}
          <div className={styles.svgContainer}>
            <svg
              id='squares_2'
              data-name='squares_2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 51.35 51.35'
              width='40'
            >
              <defs>
                <style>
                  {`.squares-1 {
        fill: none;
        stroke: #4d4d4d;
        stroke-miterlimit: 10;
      }`}
                </style>
              </defs>
              <g id='squares_1' data-name='squares_1'>
                <g>
                  <rect className='squares-1' x='.85' y='.5' width='36' height='36' />
                  <rect className='squares-1' x='7.85' y='7.5' width='36' height='36' />
                  <rect className='squares-1' x='14.85' y='14.5' width='36' height='36' />
                  <line className='squares-1' x1='.35' y1='1' x2='50.35' y2='51' />
                </g>
              </g>
            </svg>
          </div>

          {/* asterisk */}
          <div className={styles.svgContainer}>
            <svg
              id='asterisk_2'
              data-name='asterisk-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 43 43'
              width='40'
            >
              <defs>
                <style>
                  {`.asterisk-1 {
        fill: none;
        stroke: #4d4d4d;
        stroke-miterlimit: 10;
      }
      `}
                </style>
              </defs>
              <g id='asterisk_1' data-name='asterisk_1'>
                <g>
                  <line className='asterisk-1' y1='21.5' x2='43' y2='21.5' />
                  <line className='asterisk-1' x1='21.5' y1='43' x2='21.5' y2='0' />
                  <line className='asterisk-1' x1='6.3' y1='36.7' x2='36.7' y2='6.3' />
                  <line className='asterisk-1' x1='36.7' y1='36.7' x2='6.3' y2='6.3' />
                </g>
              </g>
            </svg>
          </div>

          {/* circles */}
          <div className={styles.svgContainerLrg}>
            <svg
              id='circles_2'
              data-name='circles_2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 44 116'
              width='40'
            >
              <defs>
                <style>
                  {`.circles-1 {
        fill: none;
        stroke: #4d4d4d;
        stroke-miterlimit: 10;
      }
      `}
                </style>
              </defs>
              <g id='Layer_1-2' data-name='Layer 1'>
                <g>
                  <circle className='circles-1' cx='22' cy='34' r='21.5' />
                  <circle className='circles-1' cx='22' cy='22' r='21.5' />
                  <circle className='circles-1' cx='22' cy='46' r='21.5' />
                  <circle className='circles-1' cx='22' cy='58' r='21.5' />
                  <circle className='circles-1' cx='22' cy='70' r='21.5' />
                  <circle className='circles-1' cx='22' cy='82' r='21.5' />
                  <circle className='circles-1' cx='22' cy='94' r='21.5' />
                </g>
              </g>
            </svg>
          </div>

          {/* arrow */}
          <div className={styles.svgContainer}>
            <svg
              id='arrow_2'
              data-name='arrow_2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 33.85 33.85'
              width='40'
            >
              <defs>
                <style>{`
      .arrow-1 {
        fill: none;
        stroke: #4d4d4d;
        stroke-miterlimit: 10;
      }
      `}</style>
              </defs>
              <g id='arrow_1' data-name='arrow_1'>
                <g>
                  <polyline className='arrow-1' points='33.35 33.5 33.35 .5 .35 .5' />
                  <line className='arrow-1' x1='.35' y1='33.5' x2='33.35' y2='.5' />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* <div className={styles.heroContent}> */}
        <div className={styles.title}>
          <p>Hi, I'm a full stack developer and designer based in Squamish, British Columbia.</p>
        </div>
        <div className={styles.footer}>
          <svg
            id='pointer_2'
            data-name='pointer_2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 60.01 102.03'
            width='50'
          >
            <defs>
              <style>{`
      .pointer {
        fill: var(--bg);
        stroke: #4d4d4d;
        stroke-miterlimit: 10;
      }
    `}</style>
            </defs>
            <g id='pointer_1' data-name='pointer_1'>
              <polygon
                className='pointer'
                points='58.8 59.51 .5 1.21 .5 80.84 18.69 63.25 34.53 101.37 47.64 95.87 32.54 59.51 58.8 59.51'
              />
            </g>
          </svg>
        </div>
        {/* <NavLink to={}> */}
        {/* <a href='#projects'>
            <button>View Projects</button>
          </a> */}
        {/* </div> */}
        {/* </NavLink> */}
      </div>
    </section>
  )
}

export default Hero
