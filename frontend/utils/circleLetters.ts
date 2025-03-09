type CharType = ' ' | '*' | 'M' | 'G' | 'O' | string;

const getCharacterTranslation = (char: CharType): number => {
    const translationMap: { [key in CharType]: number } = {
        ' ': -0.264062,
        '*': -0.319688,
        M: -0.541563,
        G: -0.514062,
        O: -0.514062,
    };

    return translationMap[char] ?? -0.48625;
};

export const generateCircleLetters = (text: string) => {
    const letters = text.split('');
    const degreePerChar = 163.3018 / (letters.length - 1);

    return letters.map((char, index) => ({
        id: index,
        text: char,
        rotation: -81.6509 + index * degreePerChar,
        translation: getCharacterTranslation(char),
    }));
};