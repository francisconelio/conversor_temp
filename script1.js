function main()
{
 var num = parseInt(document.getElementById("celsius").value);
 var resp = document.getElementById("resposta");
 
 
  resp.innerHTML = ctof(num);

  resp.innerHTML = ftoc(num);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}
