import { Input, Box, Heading, FormLabel, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../redux/AuthReducer/actionType";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        //console.log(res)
        if (res.type === USER_LOGIN_SUCCESS) {
          navigate(comingFrom, { replace: true });
        }
      });
    }
  };
  return (
    <Box w="50%" m="auto" bg="teal" p="5rem">
      <Heading>LOGIN PAGE</Heading>
      <form onSubmit={handleSubmit}>
        <Box>
          <FormLabel>User Name</FormLabel>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel>User Password</FormLabel>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit" mt="2rem" p="1rem 8rem">
          LOGIN
        </Button>
      </form>
    </Box>
  );
};

export default Login;
