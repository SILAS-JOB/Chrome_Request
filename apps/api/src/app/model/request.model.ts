



export interface Chrome  {
    quantity: number
    colorEspec? : boolean
    color? : string
}

export interface User {
    name: string
    email: string
    isBlocked? : boolean 
}


export interface Order {
    user: User
    date: number
    chrome : Chrome
    observation: string
}