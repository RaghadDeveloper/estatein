import type { buttonLocations } from "../../interfaces"

function ButtonLocations({ Bool, variant, onClick, children }: buttonLocations) {
    const styles = {
        base2: "2xl:w-[160px] 2xl:h-[63px] 2xl:py-[18px] 2xl:px-[24px]  lg:w-[124px] h-[49px] py-[14px] px-[20px] w-[110px] rounded-lg border-1 border-gray-15 2xl:text-[18px] text-[14px] ",
        base1: "py-[10px] px-[16px] 2xl:py-[14] 2xl:px-[20] border-1 border-gray-15 rounded-4xl 2xl:text-[18px] text-[14px] ",
        BgBlack: "bg-gray-08",
        BgGray: "bg-gray-10"
    }
    return (
        <button className={Bool ? styles.base1 + " " + styles[variant] : styles.base2 + " " + styles[variant]} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonLocations