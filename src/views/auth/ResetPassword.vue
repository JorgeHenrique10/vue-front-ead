<template>
  <section
    id="loginPage"
    :style="{
      backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')',
    }"
  >
    <div class="loginContent">
      <div class="loginCard">
        <div
          class="decor"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/images/building.jpg') + ')',
          }"
        >
          <div class="content">
            <span class="logo">
              <img :src="require('@/assets/images/logo.svg')" alt="" />
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              <p>
                Os melhores e mais completos cursos de Laravel do Brasil, cursos
                com projetos reais. Do zero ao profissional.
              </p>
            </span>
            <span class="copyright fontSmall">
              Todos os Direitos reservados - <b>Especializati</b>
            </span>
          </div>
        </div>
        <div class="login">
          <div class="content">
            <span class="logo">
              <img src="images/logoDark.svg" alt="" />
            </span>
            <span>
              <p>Seja muito bem vindo(a)!</p>
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              Acesse nossa plataforma e desfrute de cursos completos para sua
              especialização.
            </span>
            <form action="/dist/index.html" method="">
              <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  v-model="email"
                  required
                />
              </div>
              <div class="groupForm">
                <i class="far fa-key"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  v-model="password"
                  required
                />
                <i class="far fa-eye buttom"></i>
              </div>
              <button
                :class="['btn', 'primary', loading ? 'loading' : '']"
                type="submit"
                @click.prevent="reset"
              >
                <span v-if="loading">Alterando a Senha...</span>
                <span v-else>Mudar Senha</span>
              </button>
            </form>
          </div>
          <span class="copyright fontSmall">
            Todos os Direitos reservados - <b>Especializati</b>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { notify } from "@kyvg/vue3-notification";
export default {
  props: {
    token: {
      require: true,
    },
  },
  setup(props) {
    const store = useStore();
    const loading = ref(false);
    const email = ref("");
    const password = ref("");

    const reset = () => {
      loading.value = true;
      store
        .dispatch("reset", {
          email: email.value,
          password: password.value,
          token: props.token,
        })
        .then(() => {
          router.push({ name: "auth" });
          notify({
            title: "Senha alterada",
            text: "Sua senha foi modificada com sucesso!",
            type: "success",
          });
        })
        .catch(() => {
          notify({
            title: "Falhou ao gerar senha",
            text: "Falha ao tentar gerar nova senha.",
            type: "error",
          });
        })
        .finally(() => {
          loading.value = false;
        });
    };

    return {
      reset,
      loading,
      email,
      password,
    };
  },
};
</script>

<style>
</style>