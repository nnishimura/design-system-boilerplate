<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spinner',

  props: {
    large: {
      type: Boolean,
      required: false,
      default: false
    },
    small: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: '#000'
    }
  },
  data () {
    return {
      spinnerStyle: {
        borderColor: `${this.color} transparent transparent transparent`
      }
    };
  }
});
</script>

<template>
  <div
    aria-label="loading ..."
    aria-live="polite"
    role="status"
    class="spinner"
    :class="{ 'is-small': small, 'is-large': large }"
  >
    <div :style="spinnerStyle" />
    <div :style="spinnerStyle" />
    <div :style="spinnerStyle" />
    <div :style="spinnerStyle" />
    <div :style="spinnerStyle" />
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: var(#{--spinner-size});
  height: var(#{--spinner-size});
}

.spinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: calc(var(#{--spinner-size}) * 0.8);
  height: calc(var(#{--spinner-size}) * 0.8);
  margin: var(#{--spinner-border-width});
  border: var(#{--spinner-border-width}) solid #fff;
  border-radius: 50%;
  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.spinner div:nth-child(1) {
  animation-delay: -0.45s;
}

.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}

.spinner div:nth-child(3) {
  animation-delay: -0.15s;
}

.is-large {
  width: var(#{--spinner-size-lg});
  height: var(#{--spinner-size-lg});
  div {
    width: calc(var(#{--spinner-size-lg}) * 0.8);
    height: calc(var(#{--spinner-size-lg}) * 0.8);
    margin: var(#{--spinner-border-width});
    border-width: var(#{--spinner-border-width});
  }
}

.is-small {
  width: var(#{--spinner-size-sm});
  height: var(#{--spinner-size-sm});
  div {
    width: calc(var(#{--spinner-size-sm}) * 0.8);
    height: calc(var(#{--spinner-size-sm}) * 0.8);
    margin: var(#{--spinner-border-width-sm});
    border-width: var(#{--spinner-border-width-sm});
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
