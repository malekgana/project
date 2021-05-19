<template>
  <section class="form-elegantt">
    <mdb-row>
      <mdb-col md="5">
        <img src="img/ill/login.svg" class="img" />
        <mdb-card>
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><strong>Sign in</strong></h3>
            </div>
            <mdb-input label="Your email" type="email" />
            <mdb-input
              label="Your password"
              type="password"
              containerClass="mb-0"
            /> 
            <p class="font-small blue-text d-flex justify-content-end pb-3">
              Forgot <a href="#" class="blue-text ml-1"> Password?</a>
            </p>
            <div class="text-center mb-3">
             <div class="text-center">
                                    <base-button type="primary" class="btn">sign in</base-button>
                                </div>
 
            </div>
           
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
          
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    
  </section>
</template>
<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbBtn,
  mdbIcon,
  mdbModal,
  mdbModalBody,
  mdbModalFooter,
} from "mdbvue";
export default {
  name: "FormsPage",
  name: "ButtonPage",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalBody,
    mdbModalFooter,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style>
.img {
  margin-left: 110%;
  margin-top: 10%;
  width: 100%;
}
.mx-4 {
  margin-top: -90%;
}
</style>
