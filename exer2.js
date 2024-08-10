    let horabr, horafr
  
    horabr = parseFloat(prompt('Que horas são aqui no Brasil?'));
    horafr = horabr + 5;

    
    if (horafr >= 24) {
     horafr -= 24; 
    }
    
    alert(`A hora aqui no Brasil é: ${horabr.toFixed(2)} e na França é: ${horafr.toFixed(2)}`);