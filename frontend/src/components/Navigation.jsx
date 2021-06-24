import React from "react";

const links = [
    {'text':'Home','url':'/'},
    {'text':'About','url':'/about.html'},
    {'text':'Contact','url':'/contact.html'},
    {'text':'Privacy-Policy','url':'/pp.html'},
    {'text':'Login','url':'/sign-in-up.html'},
];

export default (props) => {
    return (
        <nav>
            <ul>
                {links.map((item, idx) => (
                <li className={"d-inline"} key={idx}>
                    <a
                        id="menu-link"
                        href={item.url}
                        className={item.text == 'Login' && props.location == 'header' ? 'p-3 px-4 text-bg bg-cta rounded-pill' : 'p-3 text-cta'}
                    >
                        {item.text}
                    </a>
                </li>)
                )}
            </ul>
        </nav>
    )
}