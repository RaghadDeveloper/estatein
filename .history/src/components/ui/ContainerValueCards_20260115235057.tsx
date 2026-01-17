import type { ContainerValueCardsProps } from "../../interfaces"

const ContainerValueCards = ({children}:ContainerValueCardsProps) => {
    return (
        <div className="p-6 lg:p-13">
            {children}
        </div>
    )
}

export default ContainerValueCards