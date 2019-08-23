'use strict'

class MicontroladorController {
  other(){
    return 'hola controlador'
  }
  index(){
    return this.other()
  }
}

module.exports =  MicontroladorController
