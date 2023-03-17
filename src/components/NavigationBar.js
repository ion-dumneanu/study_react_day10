import { Link } from "react-router-dom";

const NavigationBar = ()=>{
    return (
        <>
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>   
        </header>     
        </>
    )
};

export default NavigationBar;