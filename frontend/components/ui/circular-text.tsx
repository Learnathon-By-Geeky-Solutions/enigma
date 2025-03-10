interface CircularTextProps {
    text: string;
    letters: Array<{
        id: number;
        text: string;
        rotation: number;
        translation: number;
    }>;
}

const CircularText = ({ text, letters }: CircularTextProps) => {
    return (
        <div aria-label={text} className='circular-text-container'>
            {letters.map((letter) => (
                <span
                    key={letter.id}
                    className='circular-text-letter'
                    style={{
                        transform: `translateX(${letter.translation}em) rotate(${letter.rotation}deg)`,
                    }}
                >
                    {letter.text}
                </span>
            ))}
        </div>
    );
};

export default CircularText;