export function emailValidator(){
    const re = /\S+@\S+\.\S+/
    if(!email) return "E-mail não pode estar vazio."
    if(!re.test(email)) return "Erro! Precisamos de um e-mail verdadeiro."

    return ''
}