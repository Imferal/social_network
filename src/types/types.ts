export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null,
    }
    status: string | null,
    followed: boolean,
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    date: string,
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
    date: string
}