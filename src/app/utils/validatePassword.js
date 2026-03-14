export default function validatePassword(password) {
	const Regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$])[A-Za-z\d@#$]{8,}$/
    if (!password.match(Regex)){
        return false
    }
    else{
        return true
    }
}
