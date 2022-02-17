<template>
    <Form @submit="handleLogin" :validation-schema="schema" class="box">
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <Field class="input" name="email" type="email" placeholder="Email address" />
                <ErrorMessage name="email" class="error-feedback" />
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <Field class="input" name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" class="error-feedback" />
            </div>
        </div>

        <button class="button is-primary" :disabled="loading">Login</button>
    </form>
    <div v-if="message" class="notification is-danger">
      {{ message }}
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().email("Email address is invalid").required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
