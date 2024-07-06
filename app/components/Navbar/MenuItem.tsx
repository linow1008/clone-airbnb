'use client'

type Props = {
  onClick: () => void
  label: string
}

const MenuItem = ({ label, onClick }: Props) => {
  return (
    <div className="px-4 py-3 hover:bg-netural-100 transition font-semibold">
      {label}
    </div>
  )
}

export default MenuItem
