"use client";
import { Button } from "@/components/atom/button";
import { Form } from "@/components/atom/form";
import { Grid } from "@/components/atom/grid";
import * as yup from "yup";

export function Login() {
  const formProps = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Geçerli bir email adresi giriniz")
        .required("Email gereklidir"),
      password: yup
        .string()
        .min(8, "Şifre en az 8 karakter olmalıdır")
        .required("Şifre gereklidir"),
    }),
    onSubmit: (form) => {
      console.log(form);
    },
  };

  return (
      <Grid>
        <Grid.Item xs={12} sm={8} md={4}>
          <Form {...formProps}>
            <Grid >
              <Grid.Item xs={12}>
                <Form.TextField
                  name="email"
                  placeholder="Email adresinizi girin"
                ></Form.TextField>
              </Grid.Item>
              <Grid.Item xs={12}>
                <Form.TextField
                  name="password"
                  type="password"
                  placeholder="Şifrenizi girin"
                ></Form.TextField>
              </Grid.Item>
              <Grid.Item xs={12}>
                <Button
                  type="submit"
                  sx={{
                    fontWeight: 700,
                    padding: 1,
                    width: "100%",
                  }}
                >
                  Giriş Yap
                </Button>
              </Grid.Item>
            </Grid>
          </Form>
        </Grid.Item>
      </Grid>
  );
}
