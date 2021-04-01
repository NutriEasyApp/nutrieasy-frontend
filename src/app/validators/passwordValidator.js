export function passwordValidator(){
    if(!password) return "A senha não pode estar em branco."
    if(password.length < 5) return "A senha deve ter pelo menos 5 caracteres."

    return ''
}