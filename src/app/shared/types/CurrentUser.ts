export interface CurrentUser {

  id: number | string,
  userName: string,
  email:string,
  password:string,
  createdAt: string,
  updatedAt: string,
  bio?: string | null,
  image?: string,
  token: string
}
