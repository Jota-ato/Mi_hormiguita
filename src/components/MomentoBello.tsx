import { useState } from "react";
import { photos } from "../db/photos";

export default function MomentoBello() {

    const [randomPhoto] = useState(() => {
        return photos[Math.floor(Math.random() * photos.length)];
    });

    return (
        <div className="bg-surface w-[95%] max-w-400 mx-auto p-8 rounded-xl">
            <h2 className="text-3xl text-center">Uno de los mejores momentos de mi vida</h2>
            <img className="my-10" src={randomPhoto} alt="Momento bello" />
            <p className="text-lg text-center">En cada momento junto a ti sonrío por verte feliz</p>
        </div>
    );
}
