interface TodoRequestType {
	title: string;
	content: string;
}

interface TodoType {
	title: string;
	content: string;
	id: string;
	createdAt: string;
	updatedAt: string;
}

export type { TodoRequestType, TodoType };
