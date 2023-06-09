import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/App.css';
import '../../css/navbar.css';
import padronizeUrl from '../functions/padronizeUrl';

const Snitems = ({navItems, snActive, position}) => {

    return ( 
        <>
            <ul className={snActive === position ? 'flex-column sn-content' : 'display-none'}>
                <hr/>
                {navItems.subdepartamento.map((item, key)=>{
                    return <li className='flex-column nlh' key={key}><Link to={padronizeUrl('/d/' + navItems.departamento + '/' + item)} className='nav-links txt-shadow'>{item}</Link></li>
                })}
            </ul>
        </>
     );
}
 
export default Snitems;