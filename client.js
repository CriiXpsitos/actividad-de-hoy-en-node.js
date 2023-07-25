function generalTablaEstudiantes() {
    const tbody = document.getElementById("tbody-papeleria");
    fetch("http://localhost:4040/api/papeleria")
        .then(response => response.json())
        .then(papeleria => {
            papeleria.forEach(function (papeleria) {
            const fila = tbody.insertRow();
            const celdaID = fila.insertCell();
            const celdaMarca = fila.insertCell();
            const celdaproducto = fila.insertCell(); // Nombre corregido aquí
            const celdaDNI = fila.insertCell();
            const celdaStock = fila.insertCell();

            celdaID.textContent = papeleria.id;
            celdaMarca.textContent = papeleria.marca;
            celdaproducto.textContent = papeleria.producto; // Nombre corregido aquí
            celdaDNI.textContent = papeleria.DNI;
            celdaStock.textContent = papeleria.stock;
        });
     });
}

generalTablaEstudiantes();
