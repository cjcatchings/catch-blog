
export default function ChevronDoubleDown({viewBox, width, height, margins, onClick}){

    const vb = viewBox || "0 0 24 24"
    const w = width || "24"
    const h = height || "24"
    const m = margins || "ml-auto mr-0"

    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={onClick} viewBox={vb} width={w} height={h} strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${m}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
    )
}
