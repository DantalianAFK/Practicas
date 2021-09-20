<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Registrar Producto</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>ID</label>
          <input
            type="text"
            class="form-control"
            v-model="product.ID"
            required
          />
        </div>

        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="product.Nombre"
            required
          />
        </div>

        <div class="form-group">
          <label>Marca</label>
          <input
            type="email"
            class="form-control"
            v-model="product.Marca"
            required
          />
        </div>

        <div class="form-group">
          <label>Caducidad</label>
          <input
            type="text"
            class="form-control"
            v-model="product.Caducidad"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        ID: "",
        Nombre: "",
        Marca: "",
        Caducidad: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-product";

      axios
        .post(apiURL, this.product)
        .then(() => {
          this.$router.push("/view");
          this.product = {
            ID: "",
            Nombre: "",
            Marca: "",
            Caducidad: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
