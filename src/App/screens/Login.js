import React, {Component} from 'react';
import {LoginForm, Article, Anchor} from 'grommet';
import Layer from 'grommet/components/Layer';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <Article >
                    <Layer flush={false} closer={false}>
                        <LoginForm
                            title='Login'
                            forgotPassword={< Anchor href = '#' label = 'Forgot password?' />}
                            secondaryText={< Anchor href = '#' label = 'Register' />}
                            rememberMe={true}/>

                    </Layer>

                </Article>
            </div>
        );
    }
}

export default Login;
