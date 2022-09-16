function fetchData(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof arg === "function") arg(false, 'peanut butter')
            if (arg === true) resolve('peanut butter')
            if (arg === false) reject('error')
        }, 2000)
    })
}

module.exports = fetchData
