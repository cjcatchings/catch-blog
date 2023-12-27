
export default function ChevronDoubleLeft({viewBox, width, height, margins, onClick}){

    const vb = viewBox || "0 0 24 24"
    const w = width || "24"
    const h = height || "24"
    const m = margins || "ml-auto mr-0"

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={onClick} width={w} height={h} viewBox={viewBox} strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${m}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
    )
}
