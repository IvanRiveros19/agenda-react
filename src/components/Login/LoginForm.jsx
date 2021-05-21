import React, {useState} from 'react';

const LoginForm = () => {
    const [user, setUser] = useState({username: "", password: ""});

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form className="login-form" onSubmit={e => onSubmit(e)}>
                <div className="inner-form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            id="username"
                            onChange={e => setUser({...user, username: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                            type="text"
                            id="password"
                            onChange={e => setUser({...user, password: e.target.value})}
                        />
                    </div>
                    <button>Ingresar</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
