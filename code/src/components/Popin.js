import {Button} from "./AuthForm";
import React from "react";

function Popin(props) {
    return (
      <div class="popin">
        <div class="popinClose"></div>
        <div className="popinContent">
            <Button>Confirmer la suppression du compte</Button>
            <Button>Annuler</Button>
        </div>
      </div>
    );
}

export default Popin;