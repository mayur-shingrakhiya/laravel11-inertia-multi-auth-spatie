export default function ImgThree({sidebarToggle}) {
    return (<>
        <img className={`logo-icon ${sidebarToggle ? 'lg:block' : 'hidden'}`}  src="/assets/logo/logo-icon.svg" alt="Logo Three"/>
    </>);
}