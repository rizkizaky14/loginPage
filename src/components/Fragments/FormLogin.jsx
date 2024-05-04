import Button from "../Elements/Button/Index.jsx";
import InputForm from "../Elements/Input/Index.jsx";


const FormLogin = () => {
  const handleLogin = (event)=> {
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    event.preventDefault();
    window.location.href = "/products";
  };
    return (
        <form onSubmit={handleLogin}>
          <InputForm
            label="Email" 
            type="email" 
            placeholder="Email" 
            name="email"
            />        
            <InputForm.InputPassword
            label="Password" 
            type="password" 
            placeholder="" 
            name="password"
            />
          <Button classname="bg-[#604058] w-full" type="submit">Masuk</Button>
        </form>
    );
};

export default FormLogin;