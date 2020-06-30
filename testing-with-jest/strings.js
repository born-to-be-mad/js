// returns the byte length of a string(UTF-8 included)
function byteLength(str) {
    var len = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) {
            len++;
        } else if (code > 0x7ff && code <= 0xffff) {
            len += 2;
        }
        //trail surrogate
        if (code >= 0xDC00 && code <= 0xDFFF) {
            i--;
        }
    }
    return len;
}

function byteLengthImproved(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code <= 0x7f) {
            len += 1;
        } else if (code <= 0x7ff) {
            len += 2;
        } else if (code >= 0xd800 && code <= 0xDFFF) {
            // Surrogate pair:
            // These take 4 bytes in UTF-8 and 2 chars in UCS-2
            // assuming next char is the other [valid] half and just skip it)
            len += 4;
            i++;
        } else if (code < 0xffff) {
            len += 3;
        } else {
            len += 4;
        }
    }
    return len;
}

function limitToByteLength(str, maxLength) {
    var len = 0;
    var i = 0;
    var correction = 0;
    for (; i < str.length && len <= maxLength; i++) {
        var code = str.charCodeAt(i);
        if (code <= 0x7f) {
            correction = 1;
        } else if (code <= 0x7ff) {
            correction = 2;
        } else if (code < 0xffff) {
            correction = 3;
        } else if (code >= 0xd800 && code <= 0xDFFF) {
            correction = 4;
            i++;
        } else {
            correction = 4;
        }
        len += correction;
    }
    return str.substring(0, i);
}


module.exports = {
    byteLength,
    byteLengthImproved,
    limitToByteLength
};
