import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            isSignUp: false,
            error: ''
        };
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        // Kiểm tra độ dài mật khẩu
        if (this.state.password.length < 8) {
            this.setState({ error: 'Mật khẩu phải có ít nhất 8 ký tự' });
            return;
        }

        // Kiểm tra mật khẩu có chữ hoa, chữ thường và ký tự đặc biệt
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        if (!passwordRegex.test(this.state.password)) {
            this.setState({
                error: 'Mật khẩu phải bao gồm ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt'
            });
            return;
        }

        try {
            // Đăng ký người dùng và đẩy người dùng lên API
            const response = await fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email
                })
            });

            if (response.ok) {
                // Đăng nhập thành công
                this.setState({ isSignUp: true, error: '' });
            } else {
                // Xử lý lỗi đăng nhập
                const errorData = await response.json();
                this.setState({ error: errorData.message });
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            this.setState({ error: 'Đã xảy ra lỗi khi đăng ký' });
        }
    };

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    render() {
        const { isSignUp, error } = this.state;

        return (
            <div>
                {isSignUp ? (
                    <div>
                        
                    </div>
                ) : (
                    <div>
                        {error && <p>{error}</p>}
                        <form className="form" onSubmit={this.handleSignUp}>
                            <h1>Đăng nhập</h1>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default Register;