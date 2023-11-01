import logoSvg from './workflow_color_darktext.svg';

function Logo({ isDarkMode }) {
  return (
    <>
      <img src={logoSvg} alt="WorkFlow - Work Order Management" style={{ width: '130px', height: 'auto' }} />
    </>
  )
}

export default Logo