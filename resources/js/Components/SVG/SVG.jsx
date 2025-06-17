export default function SVG({svgicon,className, ...props}) {
    return (<>
    <svg  className={className}  {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path fillRule="evenodd" clipRule="evenodd" d={svgicon} fill="" />
    </svg>
    </>);
}