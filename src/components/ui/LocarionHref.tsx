import type { ButtonDataLocation } from "../../interfaces"
import { getFinalLink } from "../../utiles/helpers"

function LocarionHref(item1:ButtonDataLocation) {
    return (
        <div>
            <a href={`${getFinalLink(item1.type, item1.text)}`} className="flex gap-1.5">
                <img src={item1.Img} alt={`${item1.type}`} />
                {item1.text}
            </a>
        </div>
    )
}

export default LocarionHref
