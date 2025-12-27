import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    var {name, setName} = useState("");
    var {email, setEmail} = useState("");
    var {password, setPassword} = useState("");
    var {passwordConfirm, setPasswordConfirm} = useState("");
    var navigate = useNavigate();