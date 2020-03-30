module.exports = (str, regex = false) => {
    if(str) {
        return str.split(',').map(t => regex ? new RegExp(`^${t.trim()}$`, 'i'): t.trim());
    }
}