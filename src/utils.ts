export function toggleMode() {
	if(!localStorage.getItem('theme')){
		localStorage.setItem('theme', 'dark');
	} else {
		localStorage.removeItem('theme');
	};
	document.documentElement.classList.toggle('dark');
	
}
