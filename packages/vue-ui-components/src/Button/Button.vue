<script lang="ts">
import Vue from 'vue';
import Spinner from '../Spinner/Spinner.vue';

export default Vue.extend({
  name: 'Button',
  components: {
    Spinner
  },
  props: {
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    primaryGhost: {
      type: Boolean,
      required: false,
      default: false
    },
    secondaryGhost: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * designates the button as icon - round and flat
     */
    icon: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * large size button
     */
    large: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * small size button
     */
    small: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * adjust button width to fit the parent wrapper
     */
    isFit: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * loading state button
     */
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * active state button
     */
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * disabled state button
     */
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * button html type attribute
     * @values button | submit
     */
    type: {
      type: String,
      required: false,
      default: 'button'
    }
  },

  methods: {
    onClick (e: Event) {
      if (this.$props.isDisabled || this.$props.isLoading) return;
      this.$emit('click', e);
    }
  }
});
</script>

<template>
  <button
    class="button"
    :class="{
      'outlined': outlined,
      'secondary': secondary,
      'primary-ghost': primaryGhost,
      'secondary-ghost': secondaryGhost,
      'is-large': large,
      'is-small': small,
      'is-icon': icon,
      'is-active': isActive,
      'is-fit': isFit,
      'is-disabled': isDisabled,
      'is-loading': isLoading
    }"
    :type="type"
    @click="onClick"
    tabindex="0"
  >
    <slot />
    <spinner v-if="isLoading" small color="#A5AAAF" />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: normal;
  font-size: var(#{--font-size-base});
  border: solid 1px var(#{--primary-color});
  border-radius: var(#{--button-radius});
  background: none;
  background-color: var(#{--primary-color});
  outline: 0;
  padding: var(#{--button-padding-y}) var(#{--button-padding-x});
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    background-color: var(#{--primary-darken-1-color});
  }

  &:active {
    background-color: var(#{--primary-darken-2-color});
  }

  &.is-small {
    min-width: 4rem;
    padding: var(#{--button-padding-y-sm}) var(#{--button-padding-x-sm});
  }

  &.is-large {
    font-size: var(#{--font-size-lg});
    min-width: 8rem;
    padding: calc(var(#{--button-padding-y}) * 1.5) var(#{--button-padding-x});
  }

  &.is-icon {
    min-width: 48px;
    min-height: 48px;
    padding: 0;
    a {
      display: inline-flex;
    }
    i {
      margin-right: 0;
    }
    &.is-small {
      min-width: 32px;
      min-height: 32px;
    }
  }

  &.is-fit {
    width: 100%;
  }

  &.is-active {
    border-color: var(#{--primary-darken-2-color});
    background-color: var(#{--primary-darken-2-color});
  }

  &.outlined {
    background-color: #ffff;
    color: var(#{--text-color});
    border-color: var(#{--text-color});

    &:hover {
      // no hover state for outlined
    }

    &.is-active {
      background-color: var(#{--text-color});
      color: #fff;
      border-color: var(#{--text-color});
      * {
        color: #fff;
      }
    }

    * {
      color: var(#{--text-color});
    }
  }

  &.secondary {
    background-color: var(#{--secondary-color});
    color: #fff;
    border-color: var(#{--secondary-color});

    &.is-active, &:hover {
      border-color: var(#{--secondary-darken-2-color});
      background-color: var(#{--secondary-darken-2-color});
    }
    &:active {
      border-color: var(#{--secondary-darken-3-color});
      background-color: var(#{--secondary-darken-3-color});
    }
  }

  &.primary-ghost {
    background-color: #fff;
    color: var(#{--primary-color});
    border-color: var(#{--primary-color});

    &:hover {
      border-color: var(#{--primary-darken-1-color});
      color: var(#{--primary-darken-1-color});
      * {
        color: var(#{--primary-darken-1-color});
      }
    }

    &.is-active, &:active {
      border-color: var(#{--primary-darken-2-color});
      color: var(#{--primary-darken-2-color});
      * {
        color: var(#{--primary-darken-2-color});
      }
    }
  }

  &.secondary-ghost {
    background-color: var(#{--text-color});
    color: #fff;
    border-color: var(#{--text-color});

    &.is-active, &:hover {
      // no hover/active state for secondaryGhost
    }
  }

  &.is-disabled {
    background-color: var(#{--gray-200});
    color: var(#{--text-color});
    cursor: not-allowed;
    border-color: var(#{--gray-200});
    color: var(#{--gray});

    &:hover, &:focus, &:active, &.is-active {
      background-color: var(#{--gray-200});
      color: var(#{--text-color});
      cursor: not-allowed;
      border-color: var(#{--gray-200});
      color: var(#{--gray});
    }

    * {
      cursor: not-allowed;
      color: var(#{--gray});
    }
  }

  &.is-loading {
    background: var(#{--gray-200});
    border-color: var(#{--gray-200});
    color: var(#{--gray});
    cursor: progress;
    &:hover, &:focus, &:active, &.is-active {
      background: var(#{--gray-200});
      border-color: var(#{--gray-200});
      color: var(#{--gray});
    }
    * {
      cursor: progress;
    }
  }

  * {
    cursor: pointer;
  }

  i {
    margin-right: var(#{--spacer-sm});
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  .spinner {
    min-height: 1em;
    margin-left: var(#{--spacer-sm});
  }
}
</style>
