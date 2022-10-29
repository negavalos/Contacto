import React from 'react';
import PropTypes from 'prop-types';
import { StatusContact } from '../../models/contact.class';


const ContactoComponent = ({ statusContact }) => {
    return (
        <div>
            
            <h2>
                Apellido: { statusContact.surname }
            </h2>
            <h2>
                Nombre: { statusContact.name }
            </h2>
            <h2>
                Email: { statusContact.email }
            </h2>
            <h2>
                Estado: { statusContact.status ? 'Contacto en Línea' : 'Contacto No Disponible'}
            </h2>
        </div>
    );
};


ContactoComponent.propTypes = {
    statusContact: PropTypes.instanceOf(StatusContact)
};


export default ContactoComponent;
