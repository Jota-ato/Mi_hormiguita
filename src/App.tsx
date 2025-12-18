import { useState } from 'react';
import Modal from './components/Modal';
import MomentoBello from './components/MomentoBello';
import ComoMeSiento from "./components/ComoMeSiento";
import Conclusion from "./components/Conclusion";
import Contador from "./components/Contador";
import Introduccion from "./components/Introduccion";
import MySlider from "./components/Slider";

function App() {

    const [moment, setMoment] = useState(false);

    return (
        <div className="w-[95%] max-w-400 mx-auto my-20" >
            <h1 className="text-center text-5xl my-16 font-bold">Mi hormiguita hemosha ❤️</h1>
            <div className="my-20">
                <MySlider />
            </div>
            <div className="bg-surface p-8 rounded-xl">
                <Introduccion />
                <ComoMeSiento />
            </div>
            <Contador />
            <div className="bg-surface p-8 rounded-xl">
                <Conclusion />
                <button
                    className="block mx-auto p-4 bg-primary-light rounded-xl font-bold text-white text-xl cursor-pointer"
                    onClick={() => setMoment(true)}
                >Un momento bello</button>
            </div>
            {moment && <Modal setMoment={setMoment}><MomentoBello /></Modal>}
        </div>
    );
}

export default App;
