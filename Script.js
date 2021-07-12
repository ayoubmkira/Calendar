

const btnPrevElm = document.getElementById('btn-prev');
const btnNextElm = document.getElementById('btn-next');
const dateElm = document.getElementById('date');
const daysElm = document.getElementById('days');

let date = new Date();
let selectedMonth = date.getMonth(); // Current Month


// Get Month Name:
function getMonthName(number) {

	const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];

	return monthNames[number];

}


// Month Infos:
function monthInfos() {

	date = new Date(new Date().getFullYear(), selectedMonth, 1);

	// Number Of Days In Current Month:
	let daysOfMonth = new Date(date.getFullYear(), selectedMonth + 1, 0).getDate();
	
	let year = date.getFullYear();
	let dayNumber = date.getDay();

	// Number Of Weeks In Month:
	let nbrWeeks = Math.ceil((daysOfMonth + dayNumber) / 7);

	// Days Of The Month:
	let days = [...new Array(daysOfMonth)].map((v, i) => i + 1);

	// The Rest Days From Previous Month In First Week:
	let beforeDays = [...new Array(dayNumber)].map((v, i) => "-");
	
	// Concat 'Days' And 'beforeDays':
	let allDays = beforeDays.concat(days);

	let daysContent = '';

	for(let i = 1; allDays.length > 0; i++) {
		let current = allDays.splice(0, 7).map((v, i) => {
			return (v !== '-')? 
				(i === 0)? `<td class="day first">${v}</td>`: `<td class="day">${v}</td>`: `<td></td>`;
		}).join('');
		daysContent += `<tr>${current}</tr>`;
	}

	daysElm.innerHTML = daysContent;
	dateElm.innerHTML = `${getMonthName(date.getMonth())} - ${year}`;

}
monthInfos();

// Previous Month:
function prevMonth() {

	selectedMonth -= 1;
	monthInfos();

}

// Next Month:
function nextMonth() {

	selectedMonth += 1;
	monthInfos();

}

// Event Listeners:
btnPrevElm.addEventListener('click', prevMonth);
btnNextElm.addEventListener('click', nextMonth);