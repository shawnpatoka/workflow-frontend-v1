import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ButtonSuccess({ text, size }) {

  const buttonSize = (size) => {
    switch (size) {
      case 'small':
        return 'btn-small'
      case 'large':
        return 'btn-large'
      default:
        return 'btn-regular'
    }
  }


  return (
    <button className={`btn ${buttonSize(size)} btn-success animated-button`}>
      <span className="original-text">Submit Work Order</span>
      <span className="hover-text"><CheckCircleIcon sx={{ fontSize: '16px' }} /></span>
    </button>
  )
}
export default ButtonSuccess