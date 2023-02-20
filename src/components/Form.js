import Button from './Button.js';

const Form = (props) => {
  const inputRef = React.useRef(null);
  const RegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const HandleSubmit = (event) => {
    event.preventDefault();
    inputRef.current.parentElement.querySelectorAll(".error, .success").forEach(item => { item.remove() });
    if (inputRef.current.value === "") {
      inputRef.current.parentElement.insertAdjacentHTML("beforeend", `<span class="message error"><i class="fa fa-exclamation-circle error"></i> Email address cannot be empty.</span>`);
      inputRef.current.classList.contains("valid") ? (inputRef.current.classList.remove("valid"), inputRef.current.classList.add("invalid")) : inputRef.current.classList.add("invalid");
    } else if (!inputRef.current.value.match(RegEx)) {
      inputRef.current.parentElement.insertAdjacentHTML("beforeend", `<span class="message error"><i class="fa fa-exclamation-circle error"></i> Please enter a valid email adress.</span>`);
      inputRef.current.classList.contains("valid") ? (inputRef.current.classList.remove("valid"), inputRef.current.classList.add("invalid")) : inputRef.current.classList.add("invalid");
    } else {
      inputRef.current.parentElement.insertAdjacentHTML("beforeend", `<span class="message success"><i class="fa fa-check-circle success"></i> Accepted.</span>`);
      inputRef.current.classList.contains("invalid") ? (inputRef.current.classList.remove("invalid"), inputRef.current.classList.add("valid")) : inputRef.current.classList.add("valid");
    }
  }

  return (
    <form id={props.form} className={props.className} action='#' method='POST' noValidate onSubmit={HandleSubmit} >
      <label htmlFor={inputRef.current} className='label' form={props.form}></label>
      <input ref={inputRef} type='email' className='input' form={props.form} autoComplete='off' placeholder={props.placeholder} required />
      <Button type='submit' className='button selectable' form={props.form} content={props.button} />
    </form>
  )
};

export default Form;