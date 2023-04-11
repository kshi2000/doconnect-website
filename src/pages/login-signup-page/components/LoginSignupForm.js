import {
  Button,
  Card,
  VStack,
  CardFooter,
  CardHeader,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

import { Formik } from "formik";
import { loginValidationSchema, signUpValidationSchema } from "../schema";
import { useState } from "react";

import EmailInput from "./FormInput";
import PasswordInput from "./FormInput";
import ConfirmPasswordInput from "./FormInput";
import { useAuthContext } from "../../../providers/AuthProvider";

const message = {
  login: "Hey!! Login to DOConnect.",
  signup: "Hey!! SignUp on DOConnect.",
};

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const getValuesByFormType = (isSignUpForm) => {
  const { confirmPassword, ...restOfForm } = initialValues;
  return isSignUpForm ? initialValues : restOfForm;
};

const LoginSignupForm = () => {
  const { signUp, signIn } = useAuthContext();

  const onSubmit = (data, actions) => {
    console.log(data);
    if (isSignUpForm) {
      signUp(data.email, data.password);
    } else {
      signIn(data.email, data.password);
    }
    actions.resetForm();
  };
  const [isSignUpForm, setIsSignUpForm] = useState(true);

  const initialValuesByFormType = getValuesByFormType(isSignUpForm);

  return (
    <Formik
      initialValues={initialValuesByFormType}
      onSubmit={onSubmit}
      validationSchema={
        isSignUpForm ? signUpValidationSchema : loginValidationSchema
      }
    >
      {({
        resetForm,
        handleReset,
        handleSubmit,
        handleBlur,
        handleChange,
        errors,
        touched,
        values,
      }) => {
        return (
          <Card
            as="form"
            onSubmit={handleSubmit}
            mt={2}
            px={5}
            align="center"
            backgroundColor={"background.gray"}
          >
            <CardHeader>
              <Heading color={"title.form"} variant="h4" fontWeight="bold">
                {isSignUpForm ? message.signup : message.login}
              </Heading>
            </CardHeader>
            <VStack maxW={300} spacing={5} mb={3} w="full">
              <EmailInput
                name="email"
                type="email"
                value={values.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleReset={handleReset}
                error={errors.email}
                touched={touched.email}
              />
              <PasswordInput
                name="password"
                type="password"
                value={values.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleReset={handleReset}
                error={errors.password}
                touched={touched.password}
              />
              {isSignUpForm && (
                <ConfirmPasswordInput
                  value={values.confirmPassword}
                  label="Confirm Password"
                  placeholder="Confirm your Password"
                  name="confirmPassword"
                  type="password"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleReset={handleReset}
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />
              )}
            </VStack>
            <CardFooter>
              <Flex alignItems="center">
                <Button type="submit" variant="navCardBtn">
                  {isSignUpForm ? "Sign Up" : "Login"}
                </Button>
                &nbsp;
                <Text>or</Text>&nbsp;
                <Text
                  onClick={() => {
                    resetForm();
                    if (isSignUpForm) {
                      setIsSignUpForm(false);
                    } else {
                      setIsSignUpForm(true);
                    }
                  }}
                  cursor="pointer"
                  fontWeight={"bold"}
                  _hover={{ textDecoration: "underline" }}
                  variant={"heading5"}
                >
                  {isSignUpForm ? "Login" : "SignUp"}
                </Text>
              </Flex>
            </CardFooter>
          </Card>
        );
      }}
    </Formik>
  );
};

export default LoginSignupForm;
