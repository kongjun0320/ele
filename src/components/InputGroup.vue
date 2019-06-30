<template>
  <div class="text_group">
    <div class="input_group">
      <input
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        :class="{'is-invalid':errors}"
        @input="$emit('input',$event.target.value)"
      />
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{ btnTitle }}</button>
    </div>
    <div class="invalid-feedback" v-if="errors">{{ errors }}</div>
  </div>
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    name: String,
    placeholder: String,
    btnTitle: String,
    disabled: Boolean,
    errors: String
  }
};
</script>
<style scoped>
.input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
  border: 0px;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>
