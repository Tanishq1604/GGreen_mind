import myImg from "./images/logo.png";

export default function Header(){
    return (
        <header>
            <img src={myImg} alt="logo" />
            <h1>
                Green Minds
            </h1>
        </header>
    )
}