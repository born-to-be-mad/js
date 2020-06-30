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

/** Compute the length in UTF8 of each unicode codepoints returned by charCodeAt()
 *  (based on wikipedia's descriptions of UTF8, and UTF16 surrogate characters).
 *  It follows RFC3629 (where UTF-8 characters are at most 4-bytes long).
 * */
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
    if (4 * str.length <= maxLength){
        return str;
    }
    for (var res = [], i = 0, len = 0, correction = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 0xd800 && code <= 0xDFFF) {
            correction = 4;
            len += correction;
            if (len > maxLength) {
                return res.join("");
            }
            res.push(str.charAt(i++));
            res.push(str.charAt(i));
        } else {
            if (code <= 0x7f) {
                correction = 1;
            } else if (code <= 0x7ff) {
                correction = 2;
            } else if (code < 0xffff) {
                correction = 3;
            } else {
                correction = 4;
            }
            len += correction;
            if (len > maxLength) {
                return res.join("");
            }
            res.push(str.charAt(i));
        }
    }
    return str;
}

module.exports = {
    byteLength,
    byteLengthImproved,
    limitToByteLength
};
