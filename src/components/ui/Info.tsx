
const Info = ({text,description}:{text:string,description:number|string|undefined}) => {
    return (
        <div className="mb-3 flex justify-center items-center gap-1">
            <p className="text-xl">{text}:</p>
            <p className="text-xl text-primary-60">{description}</p>
        </div>
    )
}

export default Info