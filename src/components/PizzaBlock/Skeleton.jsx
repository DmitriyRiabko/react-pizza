import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={599}
    viewBox="0 0 280 599"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="125" /> 
    <rect x="0" y="279" rx="10" ry="10" width="280" height="30" /> 
    <rect x="0" y="324" rx="16" ry="16" width="280" height="88" /> 
    <rect x="0" y="430" rx="10" ry="10" width="70" height="35" /> 
    <rect x="160" y="425" rx="21" ry="21" width="120" height="45" />
  </ContentLoader>
)

export default Skeleton

