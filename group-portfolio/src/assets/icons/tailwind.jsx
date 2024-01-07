import React from 'react'

const tailwind = ({color, classStyle}) => {
  return (
    <svg className={classStyle} xmlns="http://www.w3.org/2000/svg" width="135" height="127" viewBox="0 0 135 127" fill="none">
        <g clip-path="url(#clip0_3_147)">
            <path d="M67.5007 25.402C49.5013 25.402 38.2557 33.8653 33.7525 50.799C40.5 42.3347 48.3771 39.1606 57.3741 41.277C62.5112 42.4815 66.1824 45.9859 70.248 49.8693C76.8648 56.1866 84.5235 63.5 101.249 63.5C119.247 63.5 130.494 55.0356 134.997 38.098C128.249 46.5673 120.373 49.7413 111.375 47.625C106.238 46.4195 102.571 42.9161 98.5006 39.0326C91.8881 32.7154 84.2314 25.402 67.5007 25.402ZM33.7525 63.5C15.7541 63.5 4.50749 71.9643 0.00421143 88.902C6.75175 80.4327 14.6278 77.2587 23.6259 79.375C28.763 80.5805 32.4342 84.0839 36.4998 87.9673C43.1166 94.2846 50.7753 101.598 67.5007 101.598C85.4991 101.598 96.7457 93.1347 101.249 76.201C94.5004 84.6653 86.6244 87.8394 77.6263 85.723C72.4902 84.5185 68.8232 81.0141 64.7523 77.1307C58.1398 70.8134 50.4832 63.5 33.7525 63.5Z" fill={color}/>
        </g>
        <defs>
            <clipPath id="clip0_3_147">
            <rect width="134.993" height="127" fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default tailwind