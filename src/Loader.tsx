import {Rings} from 'react-loader-spinner'

function Loader({type, color, message}) {
  return (
    <div className='contentWrap'>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '60%',
          transform: 'translate(-50%, -100%)',
        }}
      >
        <h2 className=''>{message}</h2>
        <Rings height='80' width='80' radius='9' color='skyblue' ariaLabel='loading' />
      </div>
    </div>
  )
}

export {Loader}
