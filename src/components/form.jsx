import React, { useState } from "react";
import '../styles/form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        contrasenia: '',
        telefono: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setFormData({
            usuario: '',
            contrasenia: '',
            telefono: '',
        });
    };

    const validateForm = () => {
        const usuarioRegex = /^[A-Za-z0-9]{1,20}$/;
        const constraseniaRegex = /^[A-Za-z0-9]{1,15}$/;
        const telefonoRegex = /^\d{1,9}$/;

        if (!usuarioRegex.test(formData.usuario)) {
            alert('El usuario es inválido, no usar caracteres especiales, sólo números y letras');
            return false;
        }
        if (!constraseniaRegex.test(formData.contrasenia)) {
            alert('La contraseña es inválida, no usar caracteres especiales, sólo números y letras');
            return false;
        }
        if (!telefonoRegex.test(formData.telefono)) {
            alert('El teléfono es inválido, usar sólo números');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            resetForm();
            alert('Se ha recibido la información, se le enviará un mensaje de texto');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Usuario" name="usuario" onChange={handleChange} maxLength={20} />
            <input placeholder="Contraseña" name="contrasenia" onChange={handleChange} type="password" />
            <input placeholder="Teléfono" name="telefono" onChange={handleChange} maxLength={9} />
            <button type="submit">Validar</button>
        </form>
    );
};

export default Form;