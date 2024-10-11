document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('¡Tu consulta ha sido enviada exitosamente!');
    
    this.reset();
  });
  