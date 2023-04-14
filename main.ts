let Note2 = 0
let missed = 0
input.onButtonPressed(Button.A, function () {
    let list: boolean[] = []
    if (list[0] == true) {
        Note2 += 1
    } else {
        missed += 1
    }
    if (Note2 == 1) {
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else if (Note2 == 2) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note2 == 3) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 4) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 5) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 6) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 7) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Note2 == 8) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Note2 == 9) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Note2 == 10) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note2 == 11) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 12) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note2 == 13) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 14) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note2 == 15) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note2 == 16) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 17) {
        music.playTone(220, music.beat(BeatFraction.Half))
    } else if (Note2 == 18) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note2 == 19) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 20) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 21) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 22) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 23) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 24) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 25) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 26) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 27) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 28) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 29) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 30) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 31) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 32) {
        music.playTone(220, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 33) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 34) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 35) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 36) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 37) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 38) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note2 == 39) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 40) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 41) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 42) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note2 == 43) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note2 == 44) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 45) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 46) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 47) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 48) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 49) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 50) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 51) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 52) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (Note2 == 53) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 54) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 55) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 56) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 57) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 58) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note2 == 59) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 60) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 61) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note2 == 62) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 63) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 64) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 65) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 66) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 67) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 68) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 69) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 70) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 71) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note2 == 72) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note2 == 73) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note2 == 74) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 75) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 76) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note2 == 77) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 78) {
        music.playTone(220, music.beat(BeatFraction.Half))
    } else if (Note2 == 79) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note2 == 80) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 81) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 82) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 83) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 84) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note2 == 85) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 86) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note2 == 87) {
        music.playTone(440, music.beat(BeatFraction.Half))
    } else if (Note2 == 88) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note2 == 89) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note2 == 90) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 91) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 92) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 93) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note2 == 94) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 95) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 96) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 97) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note2 == 98) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note2 == 99) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 100) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note2 == 101) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 102) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 103) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 104) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note2 == 105) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 106) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note2 == 107) {
        music.playTone(294, music.beat(BeatFraction.Breve))
    } else if (Note2 == 108) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Breve))
})
