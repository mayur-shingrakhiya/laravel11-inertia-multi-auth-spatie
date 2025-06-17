export default function ErrorsIMG({imagename,...props}) {
    return (<>
        <img {...props} src={`/assets/error/${imagename}`} alt={imagename} />
    </>);
}