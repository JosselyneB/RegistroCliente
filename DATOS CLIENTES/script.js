
let clientes = [];

function agregarCliente() {
    const cedula = document.getElementById('cedula').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const sexo = document.getElementById('sexo').value;
    const email = document.getElementById('email').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const discapacidad = document.getElementById('discapacidad').value;


    if (cedula && nombres && apellidos && fechaNacimiento && sexo && email && ciudad && direccion && telefono && discapacidad) {
        
        const cliente = {
            cedula,
            nombres,
            apellidos,
            fechaNacimiento,
            sexo,
            email,
            ciudad,
            direccion,
            telefono,
            discapacidad
        };

        
        clientes.push(cliente);

    
        document.getElementById('cedula').value = '';
        document.getElementById('nombres').value = '';
        document.getElementById('apellidos').value = '';
        document.getElementById('fechaNacimiento').value = '';
        document.getElementById('sexo').value = 'masculino';
        document.getElementById('email').value = '';
        document.getElementById('ciudad').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('discapacidad').value = '';

       
        actualizarTablaClientes();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}


function actualizarTablaClientes() {
    const tabla = document.getElementById('clienteTable');
    tabla.innerHTML = '<tr><th>Cédula</th><th>Nombres</th><th>Apellidos</th><th>Fecha de Nacimiento</th><th>Sexo</th><th>E-mail</th><th>Ciudad</th><th>Dirección</th><th>Teléfono</th><th>Discapacidad</th></tr>';

    for (const cliente of clientes) {
        const row = tabla.insertRow();
        const cedulaCell = row.insertCell(0);
        const nombresCell = row.insertCell(1);
        const apellidosCell = row.insertCell(2);
        const fechaNacimientoCell = row.insertCell(3);
        const sexoCell = row.insertCell(4);
        const emailCell = row.insertCell(5);
        const ciudadCell = row.insertCell(6);
        const direccionCell = row.insertCell(7);
        const telefonoCell = row.insertCell(8);
        const discapacidadCell = row.insertCell(9);

        cedulaCell.innerHTML = cliente.cedula;
        nombresCell.innerHTML = cliente.nombres;
        apellidosCell.innerHTML = cliente.apellidos;
        fechaNacimientoCell.innerHTML = cliente.fechaNacimiento;
        sexoCell.innerHTML = cliente.sexo;
        emailCell.innerHTML = cliente.email;
        ciudadCell.innerHTML = cliente.ciudad;
        direccionCell.innerHTML = cliente.direccion;
        telefonoCell.innerHTML = cliente.telefono;
        discapacidadCell.innerHTML = cliente.discapacidad;
    }
}
