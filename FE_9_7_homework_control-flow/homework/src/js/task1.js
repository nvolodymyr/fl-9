let login = prompt('Your login, man');

if (login === 'User') {
	let passwordUser = prompt('Your password, man');

	if (passwordUser === 'SuperUser') {
		alert(new Date().getHours() > 20 ? 'Good evening!' : 'Good day!');
	} else if (passwordUser === '' || passwordUser === null) {
		alert('Canceled.');
	} else {
		alert('Wrong password');
	}
} else if (login === '' || login === null) {
	alert('Canceled.');
} else if (login.length < 4) {
	alert(`I don't know any users having name length less than 4 symbols`);
} else {
	alert(`I don’t know you`);
}

