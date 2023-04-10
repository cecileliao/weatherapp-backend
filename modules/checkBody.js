//body renvoie un tableau des inputs du formulaire = req.body et keys les clés du body ['name', 'email', 'password']
function checkBody(body, keys){
    let isValid = true;
    for (const field of keys){
    if (!body[field] || body[field] === ''){
        isValid = false;
    }
   }
   return isValid;
}

module.exports = { checkBody };