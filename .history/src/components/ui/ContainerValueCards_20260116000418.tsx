import type { ContainerValueCardsProps } from "../../interfaces"

const ContainerValueCards = ({children}:ContainerValueCardsProps) => {
    return (
        <div className="p-6 lg:p-12.5 2xl:p-15 border border-gray-15
        shadow-[0_0_0_6px_#1919]">
            {children}
        </div>
    )
}

export default ContainerValueCards