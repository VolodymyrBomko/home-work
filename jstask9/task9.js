// let time = "7:00";
//
// function pidyom(isProsnyvsya, cb) {
//     setTimeout(() => {
//         if (isProsnyvsya) {
//             console.log(`prosnyvsya:`);
//             cb(null, time);
//         } else {
//             cb(`prospav`);
//             console.log(time);
//         }
//     }, 2000)
//
// }
//
// function zibratusyaNaRoboty(isReady, cb) {
//     setTimeout(() => {
//         if (isReady) {
//             time = "8:00";
//             console.log(`zibravsya na roboty: `);
//             cb(null, time);
//         } else {
//             cb(`ne vstuhayu na roboty`)
//             console.log(time);
//         }
//     }, 2000)
//
// }
//
// function idyNaRoboty(isIdy, cb) {
//     setTimeout(() => {
//         if (isIdy) {
//             time = '8:30';
//             console.log('pruihav na roboty:');
//             cb(null, time);
//         } else {
//             cb(`ne vstuhayu na roboty`);
//             console.log(time);
//         }
//     }, 2000)
// }
//
// function obid(time, cb) {
//     setTimeout(() => {
//         if (time === '13:00') {
//             console.log('treba poistu:');
//             cb(null, time);
//         } else {
//             cb('prazyu do 13:00')
//             console.log(time);
//         }
//     }, 2000)
// }
//
//
// function idyDoDomy(time, cb) {
//     setTimeout(() => {
//         if (time === '18:00') {
//             console.log('mojna itu dodomy');
//             cb(null, time);
//         } else {
//             cb('she pracuy do 18:00')
//             console.log(time);
//         }
//     }, 2000)
// }
//
// function vecherya(isHangry, cb) {
//     setTimeout(() => {
//         time = '18:30';
//         if (isHangry) {
//             console.log('treba povecheryatu:');
//             cb(null, time);
//         } else {
//             cb('ne ij vecherom bahato')
//             console.log(time);
//         }
//     }, 2000)
// }
//
// function vchutusya(isNeed, cb) {
//     setTimeout(() => {
//         time = '19:00';
//         if (isNeed) {
//             console.log('treba vchutudya bo victor bude butu po paltsah)))');
//             cb(null, time);
//         } else {
//             cb('mojna povtorutu stary temy');
//             console.log(time);
//         }
//     }, 2000)
// }
//
// function lahayuSpatu(isWont, cb) {
//     setTimeout(() => {
//         time = '23:00';
//         if (isWont) {
//             console.log('mojna luahatu spatu.nadobranich)')
//             cb(null, time);
//         } else {
//             cb('povtoru yakus temy po js')
//             console.log(time);
//         }
//     }, 2000)
// }
//
//
// pidyom(true, (err, time) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(time);
//         zibratusyaNaRoboty(true, (err, time) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(time);
//                 idyNaRoboty(true, (err, time) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(time);
//                         obid('13:00', (err, time) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(time);
//                                 idyDoDomy('18:00', (err, time) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         console.log(time);
//                                         vecherya(true, (err, time) => {
//                                             if (err) {
//                                                 console.log(err);
//                                             } else {
//                                                 console.log(time);
//                                                 vchutusya(true, (err, time) => {
//                                                     if (err) {
//                                                         console.log(err);
//                                                     } else {
//                                                         console.log(time);
//                                                         lahayuSpatu(true, (err, time) => {
//                                                             if (err) {
//                                                                 console.log(err);
//                                                             } else {
//                                                                 console.log(time);
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//
//     }
// });


let time = "7:00";

function pidyom(isProsnyvsya) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isProsnyvsya) {
                console.log(`prosnyvsya:`);
                resolve(time);
            } else {
                reject(`prospav`);
                console.log(time);
            }
        }, 2000)
    })
}

function zibratusyaNaRoboty(isReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isReady) {
                time = "8:00";
                console.log(`zibravsya na roboty: `);
                resolve(time);
            } else {
                reject(`ne vstuhayu na roboty`)
                console.log(time);
            }
        }, 2000)
    })
}

function idyNaRoboty(isIdy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isIdy) {
                time = '8:30';
                console.log('pruihav na roboty:');
                resolve(time);
            } else {
                reject(`ne vstuhayu na roboty`);
                console.log(time);
            }
        }, 2000)
    })
}

function obid(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === '13:00') {
                console.log('treba poistu:');
                resolve(time);
            } else {
                reject('prazyu do 13:00')
                console.log(time);
            }
        }, 2000)
    })
}


function idyDoDomy(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time === '18:00') {
                console.log('mojna itu dodomy');
                resolve(time);
            } else {
                reject('she pracuy do 18:00');
                console.log(time);
            }
        }, 2000)
    })
}

function vecherya(isHangry) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            time = '18:30';
            if (isHangry) {
                console.log('treba povecheryatu:');
                resolve(time);
            } else {
                reject('ne ij vecherom bahato');
                console.log(time);
            }
        }, 2000)
    })
}

function vchutusya(isNeed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            time = '19:00';
            if (isNeed) {
                console.log('treba vchutudya bo victor bude butu po paltsah)))');
                resolve(time);
            } else {
                reject('mojna povtorutu stary temy');
                console.log(time);
            }
        }, 2000)
    })
}

function lahayuSpatu(isWont) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            time = '23:00';
            if (isWont) {
                console.log('mojna luahatu spatu.nadobranich)');
                resolve(time);
            } else {
                reject('povtoru yakus temy po js');
                console.log(time);
            }
        }, 2000)
    })
}


pidyom(true)
    .then(value => {
        console.log(value);
        return zibratusyaNaRoboty(true);
    })
    .then(value => {
        console.log(value);
        return idyNaRoboty(true);
    })
    .then(value => {
        console.log(value);
        return obid('13:00');
    })
    .then(value => {
        console.log(value);
        return idyDoDomy('18:00');
    })
    .then(value => {
        console.log(value);
        return vecherya(true);
    })
    .then(value => {
        console.log(value);
        return vchutusya(true);
    })
    .then(value => {
        console.log(value);
        return lahayuSpatu(true);
    })
    .then(value => {
        console.log(value);
    })