import {quiz} from "../../../mock.ts";
import {RadioButton} from "../RadioButton/RadioButton.tsx";
import styles from './OptionContainer.module.css'
import {JSX, useLayoutEffect, useState} from "react";
import {Input, Radio, RadioChangeEvent, Space, Checkbox} from "antd";
import TextArea from "antd/es/input/TextArea";
import {DoneQuestions, MultipleChecked, OptionsProps, OptionValues, Props, SavedData} from "../../../types.ts";


type RadioOption = (props: OptionsProps) => JSX.Element

export const OptionContainer = ({currentQuestion, setCurrentQuestion}: Props) => {

    const [doneQuestion, setDoneQuestion] = useState<DoneQuestions>([])

    const optionValue: Record<OptionValues, RadioOption> = {
        single: (props: OptionsProps) => <Radio {...props}>{props.value}</Radio>,
        shortText: (props: OptionsProps) => <Radio {...props} type={props.type}>{props.value}
            {<Input maxLength={20} style={{width: 100, marginLeft: 10}}/>}</Radio>,
        longText: (props: OptionsProps) => <Radio {...props}>{props.value}{<TextArea
            style={{width: 100, marginLeft: 10}}/>}</Radio>
    }


    const [checkedAnswer, setCheckedAnswer] = useState(1);

    const [multipleChecked, setMultipleChecked] = useState<MultipleChecked[]>([])

    const saveChosen = (params: SavedData) => {
        localStorage.setItem('currentAnswer', JSON.stringify({
            question: params.question ?? currentQuestion,
            answer: params.answer ?? checkedAnswer
        }))
    }

    const saveAnswer = (id: number) => {
        setDoneQuestion(prev => [...prev, {
            id, answers: [
                checkedAnswer
            ]
        }])
        setCurrentQuestion(prev => prev + 1);
        localStorage.setItem('doneQuestion', JSON.stringify({
            [id]: checkedAnswer
        }))
    }
    const restoreData = () => {
        const savedChosen = localStorage.getItem('currentAnswer')
        if (savedChosen) {
            const currentChosen = JSON.parse(savedChosen)
            setCurrentQuestion(currentChosen.question);
            setCheckedAnswer(currentChosen.answer)
        }
    }


    const setNewRadio = (e: RadioChangeEvent) => {
        setCheckedAnswer(e.target.value);
        saveChosen({answer: e.target.value})
    };


    useLayoutEffect(() => {
        restoreData()
    }, [])


    return (
        <div className={styles.radiorow}>{quiz.map(el => (
            <div key={el.id}>
                <RadioButton
                    name={'answers'}
                    checked={currentQuestion === el.id}
                    onChange={() => {
                        setCheckedAnswer(1)
                        setCurrentQuestion(el.id)
                        saveChosen({question: el.id})
                    }}
                    type={'radio'}
                    value={el.question}
                    currentId={el.id}
                    doneQuestion={doneQuestion}
                ></RadioButton>
                <div className={`${el.id === currentQuestion ? styles.visible : styles.hidden}`}>
                    <h2>{el.question}</h2>
                    {el.isCorrectSingle
                        ?
                        <Radio.Group onChange={setNewRadio} value={checkedAnswer}>
                            <Space direction="vertical">
                                {el.answers.map(answer => {
                                    const Option = optionValue[answer.type as OptionValues];
                                    return <Option key={answer.id} value={answer.text} type={answer.type}/>;
                                })}
                                ))
                            </Space>
                        </Radio.Group>
                        :
                        <Checkbox.Group className={styles.checkbox_group}
                                        options={el.answers.map(answer => answer.text)} defaultValue={['Apple']}
                                        onChange={(e) => {
                                            multipleChecked.find(item => item.id === el.id)
                                                ? setMultipleChecked(prev => {
                                                    return prev.map(item => {
                                                        if (item.id === el.id) {
                                                            return {...item, answer: e};
                                                        } else {
                                                            return item;
                                                        }
                                                    })
                                                })
                                                : setMultipleChecked(prev => [...prev, {id: el.id, answer: e}])
                                        }}/>
                    }
                    {!doneQuestion.find(item => item.id === el.id) && <button onClick={() => {
                        if (checkedAnswer === 1) return
                        saveAnswer(el.id)
                        setCheckedAnswer(1)
                    }}>Ответить
                    </button>}

                </div>
            </div>
        ))}</div>
    );
};

