import {Header} from "./components/Header/Header.tsx";
import {QuestionContainer} from "./components/QuestionContainer/QuestionAnswerContainer.tsx";
import {ConfigProvider} from "antd";

function App() {

    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        colorPrimary: '#C03838FF',
                    },
                    Checkbox:{
                        borderRadiusSM:10,
                        colorPrimary: '#C03838FF',
                        colorPrimaryHover:'#C03838FF'
                    }
                },
            }}
        >
            <div className={'main_container'}>
                <Header/>
                <QuestionContainer/>
            </div>

        </ConfigProvider>
    )
}

export default App
