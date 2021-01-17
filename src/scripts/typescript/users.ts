import { TStatus, TRelated } from './relashionship';

export interface IShortProfile {
    id: number,
    nickname: string,
    image: string,
    status: string
}

export interface IFullProfile {
	id: number, 
	nickname: string, 
	main_quote: string, 
	profession: string, 
	location: string, 
	sex: string, 
	date_of_birth: string, 
	image: string, 
	status: string
}

export interface IUser {
	profile: IFullProfile
	related: TRelated,
	status: TStatus
}