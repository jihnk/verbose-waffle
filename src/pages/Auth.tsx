import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { login, signup } from "../api/auth";

const Auth = () => {
	const navigate = useNavigate();

	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [isValidPassword, setIsValidPassword] = useState(false);

	const emailReg = /[a-z0-9]+@[a-z]+\.[a-z]/;
	const checkValid = (e: ChangeEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case "email":
				setIsValidEmail(emailReg.test(e.target.value));
				break;
			case "password":
				setIsValidPassword(e.target.value.length >= 8);
				break;
			default:
				break;
		}
	};
	const [isNew, setIsNew] = useState(false);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		checkValid(e);
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const onSubmit = () => {
		isNew ? getSignUp() : getLogin();
	};

	const getLogin = async () => {
		if (localStorage.getItem("token")) {
			navigate(`/`);
		}
		const loginResult = await login(inputs);
		localStorage.setItem("token", loginResult.token);
		alert(loginResult.message);
		navigate(`/`);
	};

	const getSignUp = async () => {
		const signupResult = await signup(inputs);
		alert(signupResult.message);
		setInputs({ email: "", password: "" });
		navigate(`/auth`);
	};

	const checkIsNew = () => {
		setIsNew(!isNew);
	};

	return (
		<>
			<h1>회원가입/로그인</h1>
			<label htmlFor="isNew">
				회원이 아니라면 체크
				<input
					type="checkbox"
					id="isNew"
					value="signup"
					onChange={checkIsNew}
				/>
			</label>
			<form>
				<input
					name="email"
					value={inputs.email}
					placeholder="이메일"
					onChange={onChange}
				/>
				<input
					name="password"
					value={inputs.password}
					placeholder="비밀번호"
					onChange={onChange}
				/>
				<button
					onClick={onSubmit}
					disabled={!isValidEmail || !isValidPassword}
					type="button"
				>
					시작
				</button>
			</form>
		</>
	);
};
export default Auth;
