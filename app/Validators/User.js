'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'Necessário fornecer um nome',
      'email.required': 'Necessário fornecer um email',
      'email.email': 'Forneça um email válido',
      'email.unique': 'Email já cadastrado',
      'password.required': 'Necessário fornecer uma senha'
    }
  }
}

module.exports = User
