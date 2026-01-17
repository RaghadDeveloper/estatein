import type { ContainerValueCardsProps } from "../../interfaces"

const ContainerValueCards = ({children}:ContainerValueCardsProps) => {
    return (
        <div className="p-6 lg:p-12.5">
            {children}
        </div>
    )
}

export default ContainerValueCards