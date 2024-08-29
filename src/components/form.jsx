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
        const usuarioRegex = /^[A-Za-z]\d{4}$/;
        const constraseniaRegex = /^[A-Za-z0-9]{8}$/;
        const telefonoRegex = /^([2-6]\d{6}|9\d{9})$/;

        if (!usuarioRegex.test(formData.usuario)) {
            alert('El usuario es inválido, debe iniciar con una letra y luego 4 números');
            return false;
        }
        if (!constraseniaRegex.test(formData.contrasenia)) {
            alert('La contraseña es inválida, debe contener valores alfanuméricos de y 8 caracteres');
            return false;
        }
        if (!telefonoRegex.test(formData.telefono)) {
            alert('El teléfono es inválido. Considerar lo siguiente \n 7 dígitos: que comience con 2, 3, 4, 5 o 6 \n 9 dígitos: validar que comience con 9');
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
            <input placeholder="Usuario" autoComplete="off" name="usuario" onChange={handleChange} maxLength={5} value={formData.usuario} />
            <input placeholder="Contraseña" autoComplete="off" name="contrasenia" onChange={handleChange} type="password" maxLength={8} value={formData.contrasenia} />
            <input placeholder="Teléfono" autoComplete="off" name="telefono" onChange={handleChange} maxLength={9} value={formData.telefono} />
            <button type="submit">Validar</button>
        </form>
    );
};

export default Form;