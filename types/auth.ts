interface SignInType {
	email: string;
	password: string;
}

interface SignInResultType {
	message: string;
	token: string;
}

export type { SignInType, SignInResultType };
