export type ProgressBarProps = {
  label: string
  percent: number
}

const ProgressBar = ({ label, percent }: ProgressBarProps) => (
  <div className="flex flex-col gap-1">
    <span>{label}</span>
    <div className="h-px bg-slate-600">
      <div className="h-full bg-mck_aqua" style={{ width: `${percent}%` }} />
    </div>
  </div>
)

export default ProgressBar
