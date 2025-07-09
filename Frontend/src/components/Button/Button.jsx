import { Link } from 'react-router-dom'

const Button = (props) => {
    console.log(props);
  return (
    <div>
        <button> {props.name}</button>
    </div>
  )
}

export default Button
