import React from "react";

const links = [
    {'text':'Home','url':'/'},
    {'text':'About','url':'/about'},
    {'text':'Contact','url':'/contact'},
    {'text':'Privacy-Policy','url':'/pp'},
    {'text':'Login','url':'/sign-in-up'},
];

export default (props) => {
    return (
        <nav>
            <ul>
                {links.map((item, idx) => <li className="d-inline" key={idx}><a href={item.url} className="p-3 text-cta">{item.text}</a></li>)}
            </ul>
        </nav>
    )
}