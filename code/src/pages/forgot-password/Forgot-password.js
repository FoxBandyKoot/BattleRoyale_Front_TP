import React, { useState } from "react";
import { Form, Input, Button } from "../../components/AuthForm";


function ForgotPassword() {

    const [email, setEmail] = useState("");

    return (
        <>
            <h1>Accéder à votre compte</h1>
            <Form>
                <Input
                    type="email"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    placeholder="email"
                />
                <Button>Continuer</Button>
            </Form>
        </>
    )
}
export default ForgotPassword;