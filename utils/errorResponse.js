//with the help of this errorResponse utility file we can show the STATUSCODE & MESSAGE in SHORT

class errorResponse extends Error{
constructor(message,statusCode){
    super(message)
    this.statusCode = statusCode
}
}

module.exports = errorResponse