import { faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function HeaderBar(){

    return (
        <>
        <header id="headerBar" className="bg-primary w-full h-16 content-center">
            <div id="organizationBar" className="flex justify-around">
                <button id="aboutBtnHeader" className="font-playfair rounded-extra-large text-primaryText text-2xl w-auto ">Sobre</button>
                <button id="contactBtnHeader" className="font-playfair rounded-extra-large text-primaryText text-2xl w-auto ">Contatos</button>
                <div id="socialMediaBtnHeader" className="w-auto flex">
                    <a id="facebookIcon" title="Facebook" href="https://www.facebook.com" className="text-primaryText content-center">
                        <FontAwesomeIcon icon={faSquareFacebook} style={{ fontSize: '24px' }}></FontAwesomeIcon>
                    </a>
                    <a id="youtubeIcon" title="Youtube" href="https://www.youtube.com" className="text-primaryText content-center">
                        <FontAwesomeIcon icon={faSquareYoutube} style={{ fontSize: '24px' }}></FontAwesomeIcon>
                    </a>
                    <a id="instagramIcon" title="Instagram" href="https://www.instagram.com" className="text-primaryText content-center">
                        <FontAwesomeIcon icon={faSquareInstagram} style={{ fontSize: '24px' }}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        </header>
        </>
    )
}

export default HeaderBar;