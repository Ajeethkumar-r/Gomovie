import './register.scss';

export default function Register() {
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            style={{ height: '40px' }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
          <button className='loginbtn'>SignIn</button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere, Cancel anytime.</h2>
        <p>
          Ready to watch? enter your email to create or restart or your
          membership.
        </p>
        <div className='input'>
          <input type='email' placeholder='Email address' />
          <button className='registerbtn'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
