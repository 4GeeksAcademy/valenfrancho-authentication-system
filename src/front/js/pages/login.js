import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const history = useHistory();

	const handleClick = () => {
		actions.login(username, password);
	};

	// if(store.token && store.token !="" && store.token !=undefined) history.push("/");

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
				{store.token && store.token!="" && store.token !=undefined ? (
					"You are logged in"
				 ) : (
					<div>
						<input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						<button onClick={handleClick}>Login</button>
					</div>
				)}
				
		</div>
	);
};
