import React from "react";
import { ContainerBlock } from "../components";
import { withPublic } from "../src/hook/route";

function Login({ auth }) {
	const { user, loginWithGoogle, error } = auth;
	return (
		<ContainerBlock>
            <div>
                {error && <h1>{error}</h1>}
                <button onClick={loginWithGoogle}>Google</button>
                <h1>{user?.uid}</h1>
	    	</div>
        </ContainerBlock>
    );
}

export default withPublic(Login);
