import ArrowRightIcon from '../icons/arrow-right-icon';

const SubmitButton = ({ text, isLoading }: { text: string; isLoading: boolean }) => {
    return (
        <button type='submit' className='btn btn-two arrow-btn' disabled={isLoading}>
            {isLoading ? 'Processing...' : text} {!isLoading && <ArrowRightIcon />}
        </button>
    );
};

export default SubmitButton;