import type { ContainerValueCardsProps } from "../../interfaces"

const ContainerValueCards = ({children}:ContainerValueCardsProps) => {
    return (
        <div className="p-">
            {children}
        </div>
    )
}

export default ContainerValueCards