import { faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function HeaderBar(){

    return (
        <>
        <header id="headerBar" className="bg-primary w-full h-16 content-center">
            <div id="organizationBar" className="flex justify-around">
                <button 
                    id="aboutBtnHeader" 
                    className="font-playfair rounded-extra-large text-primaryText text-2xl w-auto"
                    >Sobre
                </button>
                <button 
                    id="contactBtnHeader" 
                    className="font-playfair rounded-extra-large text-primaryText text-2xl w-auto"
                    >Contatos
                </button>
                <section id="socialMediaBtnHeader" className="flex content-center items-center">
                   
                        <a 
                            id="facebookIcon" 
                            target="blank" 
                            title="Facebook" 
                            href="https://www.facebook.com" 
                            className="text-primaryIcon w-fit h-fit inline-flex mr-5">
                            <FontAwesomeIcon icon={faSquareFacebook} style={{ fontSize: '26px' }}></FontAwesomeIcon>
                        </a>
                        <a 
                            id="youtubeIcon" 
                            target="blank" 
                            title="Youtube" 
                            href="https://www.youtube.com" 
                            className="text-primaryIcon w-fit h-fit inline-flex mr-5">
                            <FontAwesomeIcon icon={faSquareYoutube} style={{ fontSize: '26px' }}></FontAwesomeIcon>
                        </a>
                        <a 
                            id="instagramIcon" 
                            target="blank" 
                            title="Instagram" 
                            href="https://www.instagram.com"
                            className="text-primaryIcon w-fit h-fit inline-flex">
                            <FontAwesomeIcon icon={faSquareInstagram} style={{ fontSize: '26px' }}></FontAwesomeIcon>
                        </a>
                    
                </section>
            </div>
        </header>
        </>
    )
}

export default HeaderBar;