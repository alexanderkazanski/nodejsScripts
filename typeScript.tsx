const User = {
	name: string,
	age: number
}

function isAdult(user: User) boolean {
	return user.age >= 21;
}

const Alexander: User = {
	name: 'alexander',
	age: 27
}

const adult: boolean = isAdult(Alexander) 

