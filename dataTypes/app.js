function dataTypes(n) {
    let text;
    switch(n) {
        case null:
        case undefined:
            text = 'no value';
            break;
        case n:
            switch(typeof n) {
                case "undefined":
                    text = 'no value';
                    break;
                case 'string':
                    text = n.length;
                    break;
                case "boolean":
                    text = Boolean(n);
                    break;
                case "number":
                    text =  ( n === 100 ) ? `equal to 100` : n < 100 ? `less than 100` : `more than 100`;
                    break;
                case "object":
                    text = n[2];
                    break;
                case "function":
                    text = n(true);
            }
    }    
    return text;
}

module.exports.dataTypes = dataTypes
