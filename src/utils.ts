const formatter = new Intl.DateTimeFormat('pt-BR', {
	day: 'numeric',
	month: 'short',
	year: 'numeric'
})
export function formatDate(date: Date) {
	return formatter.format(date)
}
