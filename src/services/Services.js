export function getIndex(list, item) {
	return list.findIndex(listItem => listItem._id === item._id);
}
