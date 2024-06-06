import { Statistic } from 'antd';
import {useEffect, useRef, useState} from "react";
import {quizTime} from "../../mock.ts";
import styles from './Header.module.css'

const { Countdown } = Statistic;

export const Header = () => {

    const [deadline, setDeadline] = useState(0)
    const timer = useRef(0);

    const restoreTimer = () => {
        const savedTimer = localStorage.getItem('timer');


        if(savedTimer && Number(savedTimer) >= 1000){
            setDeadline(Date.now() + Number(savedTimer))
            timer.current = Date.now() + Number(savedTimer)
        }
        else{
            setDeadline(Date.now() + quizTime)
            timer.current = Date.now() + quizTime
        }
    }


    useEffect(() => {
        restoreTimer()
        return () => {

        }
    }, [])

    return (
        <div className={styles.header}>
            <h1>Тестирование</h1>
            <Countdown className={styles.countdown} value={deadline} format="mm:ss" onChange={(value) => {
                if((value && typeof value === "number" && Math.round(value/1000)!== timer.current)){
                    timer.current = Math.round(value/1000)
                    localStorage.setItem('timer', String(value))
                }
            }}/>
        </div>
    );
};

