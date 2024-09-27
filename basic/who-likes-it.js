function likes(names) {
    return (names.length === 0 ? 'no one ' : names.length === 1 ? [names[0] + ' '] : names.length > 3 ? names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others ' : names.map(x => names.indexOf(x) === names.length - 1 ? 'and ' + x + ' ' : names.indexOf(x) === names.length - 2 ? x + ' ' : x + ', ').join('')) + (names.length > 1 ? 'like this' : 'likes this');
}