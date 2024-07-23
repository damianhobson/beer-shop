import { useState, useEffect } from 'react'


function Rating(props) {
  const stars = new Array(5).fill(1)
  return (
    <div className="p-1" >
      <svg width="56px" height="16px" viewBox="0 0 30 56" xmlns="http://www.w3.org/2000/svg" >
        <defs>
          <clipPath id={"cut-bottom_" + props.id}>
            <rect x="0" y="0" width={((props.stars * 100)+20) +'%'} height="32" />
          </clipPath>
        </defs>

        <g transform={`translate(-56, 0)`} > 
          {stars.map((star, index) => (
              <g key={'starEmpty_'+ index} transform={`translate(${index * 35}, 0)`} > 
                <path style={{fill:"none",stroke:"#000000"}} d="M16.41,1.52,19.06,9a1.52,1.52,0,0,0,1.35,1l7.65.32a1.58,1.58,0,0,1,.87,2.8l-6,5a1.6,1.6,0,0,0-.52,1.65l2.08,7.71a1.52,1.52,0,0,1-2.28,1.73l-6.37-4.45a1.44,1.44,0,0,0-1.66,0L7.8,29.23A1.52,1.52,0,0,1,5.52,27.5L7.6,19.79a1.6,1.6,0,0,0-.52-1.65l-6-5a1.58,1.58,0,0,1,.87-2.8l7.65-.32a1.52,1.52,0,0,0,1.35-1l2.65-7.52A1.48,1.48,0,0,1,16.41,1.52Z" id="interface-light-rating-star"></path> 
              </g> 
          ))}
        </g> 
        <g transform={`translate(-56, 0)`} clipPath={`url(#cut-bottom_${props.id})`}> 
          {stars.map((star, index) => (
              <g key={'starFill_'+ index} transform={`translate(${index * 35}, 0)`} > 
                <path style={{fill:"#ccb206",stroke:"#000000"}}  d="M16.41,1.52,19.06,9a1.52,1.52,0,0,0,1.35,1l7.65.32a1.58,1.58,0,0,1,.87,2.8l-6,5a1.6,1.6,0,0,0-.52,1.65l2.08,7.71a1.52,1.52,0,0,1-2.28,1.73l-6.37-4.45a1.44,1.44,0,0,0-1.66,0L7.8,29.23A1.52,1.52,0,0,1,5.52,27.5L7.6,19.79a1.6,1.6,0,0,0-.52-1.65l-6-5a1.58,1.58,0,0,1,.87-2.8l7.65-.32a1.52,1.52,0,0,0,1.35-1l2.65-7.52A1.48,1.48,0,0,1,16.41,1.52Z" id="interface-light-rating-star"></path>
              </g> 
          ))}
        </g> 
      </svg>
    </div>
  )
}

export default Rating