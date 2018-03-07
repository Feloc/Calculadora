
var calculadora = {
  pantalla : document.getElementById('display'),
  numP:"0",
  inNum:1,
  punto:0,
  num1:0,
  opera: "no",

  init: function(){
    this.mostrar();
    this.botones();
  },

  numero: function(num){
    if (this.numP=="0" || this.inNum==1) {
      this.pantalla.innerHTML=num;
      this.numP=num;
      if (num == ".") {
        this.pantalla.innerHTML="0.";
        this.numP=num;
        this.punto=1
      }
    }else{
      if (num=="." && this.punto==0) {
        this.pantalla.innerHTML+=num;
        this.numP+=num;
        this.punto=1;
      }else if (num=="." && this.punto==1) {
      }else{
        this.pantalla.innerHTML+=num;
        this.numP+=num;
      }
    }
    this.inNum=0;
    limite=this.pantalla.innerHTML;
    largo = limite.length;
    if (largo == 9) {
      this.pantalla.innerHTML=limite.slice(0,8)
    }
  },

   mostrar: function(){
    document.getElementById('0').addEventListener("click", function(){calculadora.numero("0")});
    document.getElementById('1').addEventListener("click", function(){calculadora.numero("1")});
    document.getElementById('2').addEventListener("click", function(){calculadora.numero("2")});
    document.getElementById('3').addEventListener("click", function(){calculadora.numero("3")});
    document.getElementById('4').addEventListener("click", function(){calculadora.numero("4")});
    document.getElementById('5').addEventListener("click", function(){calculadora.numero("5")});
    document.getElementById('6').addEventListener("click", function(){calculadora.numero("6")});
    document.getElementById('7').addEventListener("click", function(){calculadora.numero("7")});
    document.getElementById('8').addEventListener("click", function(){calculadora.numero("8")});
    document.getElementById('9').addEventListener("click", function(){calculadora.numero("9")});
    document.getElementById('on').addEventListener("click", function(){calculadora.borrar()});
    document.getElementById('sign').addEventListener("click", function(){calculadora.cambiarSigno()});
    document.getElementById('dividido').addEventListener("click", function(){calculadora.operacion("/")});
    document.getElementById('por').addEventListener("click", function(){calculadora.operacion("*")});
    document.getElementById('menos').addEventListener("click", function(){calculadora.operacion("-")});
    document.getElementById('mas').addEventListener("click", function(){calculadora.operacion("+")});
    document.getElementById('punto').addEventListener("click", function(){calculadora.numero(".")});
    document.getElementById('igual').addEventListener("click", function(){calculadora.resultado()});
  },

  operacion: function(signo){
    this.resultado();
    this.pantalla.innerHTML="";
    this.num1=this.numP;
    this.opera=signo;
    this.inNum=1;
  },

  resultado: function(){
    if (this.opera=="no") {
      this.pantalla.innerHTML=this.numP;
    }else{
      sl=this.num1+this.opera+this.numP;
      sol=eval(sl);
      /*if (sol.toString().length > 9) {
        sol = sol.toString().slice(0,8);
        sol = Number(sol);
      }*/
      this.pantalla.innerHTML=sol;
      this.numP=sol;
      this.opera="no";
      this.inNum=1;
    }
  },

  cambiarSigno: function(){
    nsign=Number(this.numP);
    nsign=-nsign;
    this.numP=String(nsign);
    this.pantalla.innerHTML=this.numP;
  },

  borrar: function(){
    this.pantalla.innerHTML=0;
    this.numP="0";
    this.punto=0;
    this.num1=0;
    this.opera="no";
  },

  botones: function(){
    btn = document.getElementsByClassName('tecla');
		for (var i = 0; i < btn.length; i++) {
			btn[i].onmousedown = this.teclaPresionadaDn;
			btn[i].onmouseup = this.teclaPresionadaUp;
    }
  },

  teclaPresionadaDn:function(event){
    calculadora.btnDn(event.target)
  },

  teclaPresionadaUp:function(event){
    calculadora.btnUp(event.target)
  },

  btnDn: function(elemento){
    elemento.style.padding = "2px";
  },

  btnUp: function(elemento){
    elemento.style.padding = "0px";
  },
};

calculadora.init()
