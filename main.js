// Spausk F1 ir Run Code


function convertToRoman(num) {
    let txt = num.toString();
    let sar = txt.split('');
    let sarSuNul = [];
    let rom = []
    let il = '1' + '0'.repeat(txt.length - 1);
 
    for (let i = 0; i < sar.length; i++) {
        sarSuNul.push((parseInt(sar[i]) * il).toString());
        il = il / 10;
    }

    let romSk = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

    for (let i = 0; i < sarSuNul.length; i++) {
        if (sarSuNul[i].length == 1) {
            console.log(sarSuNul[i][0]);

            if (sarSuNul[i][0] == 1) {
                rom.push('I')
            } else if (sarSuNul[i][0] == 2) {
                rom.push('II')
            } else if (sarSuNul[i][0] == 3) {
                rom.push('III')
            } else if (sarSuNul[i][0] == 4) {
                rom.push('IV')
            } else if (sarSuNul[i][0] == 5) {
                rom.push('V')
            } else if (sarSuNul[i][0] == 6) {
                rom.push('VI')
            } else if (sarSuNul[i][0] == 7) {
                rom.push('VII')
            } else if (sarSuNul[i][0] == 8) {
                rom.push('VIII')
            } else if (sarSuNul[i][0] == 9) {
                rom.push('IX')
            }
        } else if (sarSuNul[i].length == 2) {
            if (sarSuNul[i][0] == 1) {
                rom.push('X')
            } else if (sarSuNul[i][0] == 2) {
                rom.push('XX')
            } else if (sarSuNul[i][0] == 3) {
                rom.push('XXX')
            } else if (sarSuNul[i][0] == 4) {
                rom.push('XL')
            } else if (sarSuNul[i][0] == 5) {
                rom.push('L')
            } else if (sarSuNul[i][0] == 6) {
                rom.push('LX')
            } else if (sarSuNul[i][0] == 7) {
                rom.push('LXX')
            } else if (sarSuNul[i][0] == 8) {
                rom.push('LXXX')
            } else if (sarSuNul[i][0] == 9) {
                rom.push('XC')
            }
        } else if (sarSuNul[i].length == 3) {
            if (sarSuNul[i][0] == 1) {
                rom.push('C')
            } else if (sarSuNul[i][0] == 2) {
                rom.push('CC')
            } else if (sarSuNul[i][0] == 3) {
                rom.push('CCC')
            } else if (sarSuNul[i][0] == 4) {
                rom.push('CD')
            } else if (sarSuNul[i][0] == 5) {
                rom.push('D')
            } else if (sarSuNul[i][0] == 6) {
                rom.push('DC')
            } else if (sarSuNul[i][0] == 7) {
                rom.push('DCC')
            } else if (sarSuNul[i][0] == 8) {
                rom.push('DCCC')
            } else if (sarSuNul[i][0] == 9) {
                rom.push('CM')
            }
        } else if (sarSuNul[i].length == 4) {
            if (sarSuNul[i][0] == 1) {
                rom.push('M')
            } else if (sarSuNul[i][0] == 2) {
                rom.push('MM')
            } else if (sarSuNul[i][0] == 3) {
                rom.push('MMM')
            }
        }
    }

    console.log(rom.join(''));

    return rom.join('');


   }


convertToRoman(365);
