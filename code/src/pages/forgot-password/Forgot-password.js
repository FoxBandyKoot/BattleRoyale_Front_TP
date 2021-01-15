import React, { useState } from "react";
import { Card, Form, Input, Button } from "../../components/ForgotPasswordForm";
import { Link, Redirect } from "react-router-dom";

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
        <Link to="/modify-password">Modifier votre mot de passe</Link>
      </Card>
    </>
  );
}
export default ForgotPassword;
