import { useEffect, useState } from "react"

export const Navigation = () => {

    const [isClicked, setIsClicked] = useState(false)

    const show = () => {
        setIsClicked(!isClicked)
    }

    return (
        <>
            <nav >
                <p className="logoParagraph">Damyan.dev</p>
                <div className="navBtns">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                    <button onClick={show}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></button>
                </div>
            </nav>
            <div className={isClicked ? "mobile-nav open-menu" : "mobile-nav closed-menu"}>
                <span onClick={show}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path>  <path d="M6 6l12 12"></path></svg></span>
                <ul>
                    <li onClick={show}><a href="#home">Home</a></li>
                    <li onClick={show}><a href="#about">About</a></li>
                    <li onClick={show}><a href="#projects">Projects</a></li>
                    <li onClick={show}><a href="#contacts">Contact</a></li>
                </ul>
            </div>

        </>
    )
}