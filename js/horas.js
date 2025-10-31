// Fortaleza
fetch('http://worldtimeapi.org/api/timezone/America/Fortaleza')
  .then(res => res.json())
  .then(data => {
    const horabasemundial = new Date(data.utc_datetime); // Hora em UTC
    document.getElementById('hora-fortaleza').textContent =
      horabasemundial.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Fortaleza'
      });
  });

// Nova York
fetch('http://worldtimeapi.org/api/timezone/America/New_York')
  .then(res => res.json())
  .then(data => {
    const horabasemundial = new Date(data.utc_datetime); // Hora em UTC
    document.getElementById('hora-ny').textContent =
      horabasemundial.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/New_York'
      });
  });
