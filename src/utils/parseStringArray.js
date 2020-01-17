module.exports = function parseStringArray(arrayString){
    return techsArray = arrayString.split(',').map( tech => tech.trim() )
}