import { AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

interface FaqItemProps {
    value: string;
    question: string;
    answer: string;
}

const FaqItem = ({ value, question, answer }: FaqItemProps) => {
    return (
        <AccordionItem value={value}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
    );
};

export default FaqItem;