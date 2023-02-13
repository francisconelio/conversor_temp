function convertToF(){
    
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = celsius * 1.8 + 32
    // fahrenheitconvertido = 
    console.log(fahrenheit.toFixed(2).replace('.', ','))
    //Imprimir a Temperatura
    let textresult = ' A temperatura de ' + celsius + '°C convertido em fahrenheit é ' + fahrenheit.toFixed(2).replace('.',',') + 'F'
    console.log(textresult)
    document.getElementsByTagName('p')[1].innerHTML = textresult
}
    //console.log(' A temperatura de ' + celsius + '°C convertido em fahrenheit é ' + fahrenheit + 'F')

function convertToC(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsius = ((fahrenheit-32)*(5/9 ))
    let textresult1 = ' A temperatura de ' + fahrenheit + 'F convertido em celsius é ' + celsius + '°C'
    document.getElementsByTagName('p')[2].innerHTML = textresult1
    console.log(textresult1)
}

function limpar(){
    document.getElementsByTagName('p')[1].innerHTML=''
    document.getElementsByTagName('p')[2].innerHTML=''
}

function escolher(){
    let c = document.getElementById('c').value;
    let f = c * 1.8 + 32
    console.log(f.toFixed(2).replace('.', ','))
}