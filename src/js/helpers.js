function theMeta(arr, key) {
	return arr.filter(({title}) => (title === key))[0]
}

export default theMeta