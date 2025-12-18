import type { ReactNode } from "react";

type ModalProps = {
    children: ReactNode
    setMoment: (value: boolean) => void
}

export default function Modal({children, setMoment}: ModalProps) {
    return (
        <div
            className="bg-black/40 flex justify-items-center items-center h-screen w-full fixed top-0 left-0 z-50"
            onClick={() => setMoment(false)}
        >
            {children}
        </div>
    );
}
