export const checkInput = (str = '') => {
    const regEx = {
        sum: /=(sum)\([a-i][1-9]:[a-i][1-9]\)/,
        concat: /=(concat)\([a-i][1-9]:[a-i][1-9]\)/,
        average: /=(average)\([a-i][1-9]:[a-i][1-9]\)/,
        hyperlink: /=(hyperlink)\(https?:\/\/[^\s]+\)/g,
    };

    for (let key in regEx) {
        if (regEx[key].test(str.toLowerCase())) {
            const arrayInput = parseQuery(str);
            return [key, arrayInput];
        }
    }
};

const parseQuery = (query) => {
    const array = [];

    const target = '(';

    let pos = -1;
    while ((pos = query.indexOf(target, pos + 1)) !== -1) {
        array.push(query.slice(pos + 1, pos + 3));
        array.push(query.slice(pos + 4, pos + 6));
    }
    let num = +array[0].charAt(1) + 1;
    let numMore = +array[0].charAt(1) - 1;
    if (num < +array[1].charAt(1)) {
        while (num < +array[1].charAt(1)) {
            array.push(`${array[0].charAt(0)}${num}`);
            num += 1;
        }
    } else if (numMore > +array[1].charAt(1)) {
        while (numMore > +array[1].charAt(1)) {
            array.push(`${array[0].charAt(0)}${numMore}`);
            numMore -= 1;
        }
    }
    else {
        array.pop();
    }
    return array;
};