import {useState} from 'react';
import {OptionContainer} from "../ui/OptionContainer/OptionContainer.tsx";


export const QuestionContainer = () => {

    const [currentQuestion, setCurrentQuestion] = useState(1);

    return (
        <OptionContainer currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
    );
};

