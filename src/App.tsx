import ComoMeSiento from "./components/ComoMeSiento";
import Conclusion from "./components/Conclusion";
import Contador from "./components/Contador";
import Introduccion from "./components/Introduccion";
import MySlider from "./components/Slider";

function App() {

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
            </div>
        </div>
    );
}

export default App;
