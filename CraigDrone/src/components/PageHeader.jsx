
import './PageHeader.css'

const PageHeader = (props) => {

  return (
    <>
      <div className='ServicesHeader'>
        <div className="glass">
          <h2 className='SevicesHeaderText'> {props.hText}</h2>
        </div>
      </div>


    </>
  )
};

export default PageHeader