import { TRelated, TStatus } from "../../typescript/relashionship";


export interface ShortProfile {
    id: number,
    nickname: string,
    image: string,
    status: string
}

export interface FullProfile {
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

export interface FullProfileWithRS extends FullProfile {
	related: TRelated,
	status: TStatus
}