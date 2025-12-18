import Introduccion from "./components/Introduccion";
import MySlider from "./components/Slider";

function App() {

    return (
        <>
            <h1 className="text-center text-5xl my-16 font-bold">Mi hormiguita hemosha ❤️</h1>
            <div
                className="w-[95%] max-w-400 mx-auto my-20"    
            >
                <MySlider />
            </div>
            <Introduccion />
        </>
    );
}

export default App;
