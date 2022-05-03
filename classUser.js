export class User {

    #userName
    #password
constructor (userName, password) {
    this.#userName = userName
    this.#password = password
}

get UserName () {
    return this.#userName
}

get Password () {
    return this.#password
}

set UserName (element) {
    this.#userName = element
}

set Password (element) {
    this.#password = element
}

}