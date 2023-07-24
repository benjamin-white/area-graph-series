const validate = (userString) => {
  switch (true) {
    case !userString.length:
      return 'Component name must not be empty'
    case !/^[A-Z].*$/.test(userString):
      return 'Component name must start with a capital letter'
    case !/^[a-z][a-z0-9]*$/i.test(userString):
      return 'Component name must only contain alphanumeric characters'
    default:
      return true
  }
}

export default validate
