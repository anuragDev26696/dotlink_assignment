import React from 'react';
import {FaRegUserCircle} from 'react-icons/fa';
import {VscBell} from 'react-icons/vsc';
import {BiEnvelope, BiMessageSquareAdd} from 'react-icons/bi';
import './style.css';

const Footer = () => {
    return (
        <div class="footIcons">
            <div className="footIcon">
                <FaRegUserCircle />
            </div>
            <div className="footIcon active">
                <BiEnvelope/>
            </div>
            <div className="footIcon">
                <BiMessageSquareAdd/>
            </div>
            <div className="footIcon">
                <VscBell/>
            </div>
        </div>
    )
}

export default Footer;