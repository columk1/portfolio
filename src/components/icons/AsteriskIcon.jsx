import PropTypes from 'prop-types'

const AsteriskIcon = ({ styles }) => {
  return (
    <svg
      id='asterisk_2'
      data-name='asterisk-2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 43 43'
      width={styles.width || '40'}
    >
      <defs>
        <style>
          {`.asterisk-1 {
        fill: none;
        stroke: ${styles.color || '#4d4d4d'};
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
  )
}

AsteriskIcon.propTypes = {
  styles: PropTypes.object,
}

export default AsteriskIcon
