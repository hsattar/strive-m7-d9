export interface IPasta {
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
    comments: IComments[]
}

export interface IComments {
    id: number
    rating: number
    comment: string
    author: string
    date: string
}