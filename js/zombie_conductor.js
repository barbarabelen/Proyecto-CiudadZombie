/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
ZombieConductor.prototype.atacar = function(jugador){
  Jugador.perderVidas(Jugador.vidas);
}

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if (this.direccion === 'v'){
    this.y += this.velocidad;
    if(this.y > Juego.altoCanvas+this.alto){
      this.y = -this.alto*2;
    }
  }else{
    this.x += this.velocidad;
    if(this.x > Juego.anchoCanvas+this.ancho){
      this.x = -this.ancho*2;
    }
  }
}

