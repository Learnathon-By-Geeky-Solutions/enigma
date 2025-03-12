type CharType = ' ' | '*' | 'M' | 'G' | 'O' | string;

// CONSTANTS FOR CIRCULAR TEXT ARRANGEMENT
const TOTAL_ARC_ANGLE = 163.3018; // DEGREES OF ARC THAT TEXT SPANS
const START_ANGLE = -81.6509; // STARTING ANGLE FOR FIRST CHARACTER

const getCharacterTranslation = (char: CharType): number => {
    const translationMap: { [key in CharType]: number } = {
        // TRANSLATION VALUES REPRESENT HORIZONTAL OFFSET IN EM UNITS FOR PROPER CIRCULAR TEXT ALIGNMENT
        ' ': -0.264062,
        '*': -0.319688,
        M: -0.541563,
        G: -0.514062,
        O: -0.514062,
    };

    // DEFAULT TRANSLATION VALUE FOR CHARACTERS NOT IN MAP
    return translationMap[char] ?? -0.48625;
};

export const generateCircleLetters = (text: string) => {
    const letters = text.split('');
    const degreePerChar = TOTAL_ARC_ANGLE / (letters.length - 1);

    return letters.map((char, index) => ({
        id: index,
        text: char,
        rotation: START_ANGLE + index * degreePerChar,
        translation: getCharacterTranslation(char),
    }));
};