interface LearningCurveProps {
    stroke: string;
}

const LearningCurve = ({ stroke }: LearningCurveProps) => {
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 61 68'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-labelledby='learning-curve'
        >
            <title id='learning-curve'>learning curve</title>
            <path
                d='M2.41406 39.1281C5.21853 31.0469 11.1039 12.0695 12.2095 0.80957M21.5425 54.3514C29.6573 51.6458 48.2864 44.7369 57.8845 38.7463M13.6265 42.823C17.9719 39.2006 27.6074 30.5142 31.3864 24.7485'
                stroke={stroke}
                strokeWidth='4'
                strokeLinejoin='round'
                style={{ strokeDasharray: '105, 107', strokeDashoffset: 0 }}
            />
        </svg>
    );
};

export default LearningCurve;