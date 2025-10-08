export default function validateEmail(email) {
	const Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!email.match(Regex)){
        return false
    }
    else{
        return true
    }
}
