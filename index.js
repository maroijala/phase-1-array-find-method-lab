// const record = [
//     { year: "2015", result: "W" },
//     { year: "2014", result: "N/A" },
//     { year: "2013", result: "L" },

// ]



function superbowlWin(record) {

    let rec = record.find(recc => recc.result === 'W')
    return rec ? rec.year : undefined

}

