/**
 * SCENTIQ — Page Header Component
 * Phase A: Header halaman dengan judul, deskripsi, dan slot aksi
 */

interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
