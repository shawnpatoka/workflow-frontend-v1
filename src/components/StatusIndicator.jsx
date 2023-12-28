function StatusIndicator({ type, status }) {
  const statusClassMap = {
    open: 'bg-status-open',
    in_progress: 'bg-status-in-progress',
    ready_for_review: 'bg-status-ready-for-review'
  }

  const statusNameMap = {
    open: 'Open',
    in_progress: 'In Progress',
    ready_for_review: 'Ready For Review'
  }

  const setStatusStyle = (status) => {
    const statusType = type === 'dot' ? 'status-circle' : 'status-rectangle'
    return `${statusType} ${statusClassMap[status] || ''}`;
  }

  if (type === 'dot') {
    return (
      <div className={setStatusStyle(status)}></div>
    )
  }

  if (type === 'rectangle') {
    return (
      <>
        <div className={setStatusStyle(status)}>{statusNameMap[status]}</div>
      </>
    )
  }

}
export default StatusIndicator