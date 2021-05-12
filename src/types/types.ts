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

export type ProfileType = {
    userId: number,
    aboutMe: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    photos: {
        small: string | null,
        large: string | null,
    },
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