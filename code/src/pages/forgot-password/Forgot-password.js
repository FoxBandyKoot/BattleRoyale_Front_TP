import React, { useState } from "react";
import { Card, Form, Input, Button } from "../../components/ForgotPasswordForm";


function ForgotPassword() {

    const [email, setEmail] = useState("");

    return (
        <>
            <Card>
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
            </Card>
        </>
    )
}
export default ForgotPassword;