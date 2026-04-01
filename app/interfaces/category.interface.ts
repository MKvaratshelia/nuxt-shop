export interface Category {
	id: number;
	name: string;
	alias: string;
}

export interface GetCategoriesResponse {
	categories: Category[];
}