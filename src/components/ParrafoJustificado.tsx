
export default function ParrafoJustificado({children} : {children: React.ReactNode}) {
    return (
        <p className="my-4 text-xl text-justify">
            {children}
        </p>
    );
}
