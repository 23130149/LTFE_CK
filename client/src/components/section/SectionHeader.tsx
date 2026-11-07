type Props = {
    title: string
    desc?: string
    date?: string
    dateInline?: boolean
    tabs?: string[]
    active?: number
    onTab?: (index: number) => void
}

export default function SectionHeader({ title, desc, date, dateInline = false, tabs = [], active = 0, onTab }: Props) {
    return (
        <>
            <header className={`sec-head${dateInline ? ' sec-head--inline' : ''}`}>
                <div>
                    <h1 className="sec-title"><span className="sec-title__bar" aria-hidden="true" />{title}</h1>
                    {desc && <p className="sec-desc">{desc}</p>}
                </div>
                {date && <time className={`sec-date${dateInline ? ' sec-date--inline' : ''}`}>{date}</time>}
            </header>
            {tabs.length > 0 && (
                <div className="sec-tabs" role="tablist">
                    {tabs.map((label, i) => (
                        <button key={label} type="button" role="tab" aria-selected={i === active} onClick={() => onTab?.(i)}>
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}
