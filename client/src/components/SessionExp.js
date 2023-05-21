import jwt_decode from "jwt-decode";

function MyComponent() {
	const token = localStorage.getItem("token");
	let decoded;
	try {
		decoded = jwt_decode(token);
		if (decoded) {
			const currentTime = Date.now() / 1000;
			if (decoded.exp < currentTime) {
				console.log("JWT expired");
			} else {
				console.log("JWT valid");
			}
		}
	} catch (error) {
		console.log("Error occured while decoding JWT: ", error);
	}
}
export default MyComponent;
