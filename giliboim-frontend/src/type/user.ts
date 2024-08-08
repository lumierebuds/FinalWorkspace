export interface User {
    id: string,
    nickname: string,
    password: string,
    confirmPassword: string,
    name: string,
    birthDate: string,
    phoneNumber: string,
    verificationCode: string,
}

export const defaultUser : User = {
    id: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthDate: '',
    phoneNumber: '',
    verificationCode: '',
} as const;