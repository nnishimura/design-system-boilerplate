import dButton from './Button.vue';

export default {
  title: 'UI Components/Button',
  component: dButton
};

export const All = () => {
  const data: { [key: string]: any } = {
    isSampleTheme: false
  };

  return {
    components: { dButton },
    data () {
      return data;
    },
    methods: {
      toggleTheme () {
        data.isSampleTheme = !data.isSampleTheme;
      }
    },
    template: `
    <div :data-theme="isSampleTheme ? 'sample' : ''">
      <ul class="grid-table">
        <li>Primary</li>
        <li>Secondary</li>
        <li>Outlined</li>
        <li>Primary Ghost</li>
        <li>Secondary Ghost</li>

        <li><d-button small>Small</d-button></li>
        <li><d-button secondary small>Small</d-button></li>
        <li><d-button outlined small>Small</d-button></li>
        <li><d-button primaryGhost small>Small</d-button></li>
        <li><d-button secondaryGhost small>Small</d-button></li>

        <li><d-button>Default</d-button></li>
        <li><d-button secondary>Default</d-button></li>
        <li><d-button outlined>Default</d-button></li>
        <li><d-button primaryGhost>Default</d-button></li>
        <li><d-button secondaryGhost>Default</d-button></li>

        <li><d-button large>Large</d-button></li>
        <li><d-button secondary large>Large</d-button></li>
        <li><d-button outlined large>Large</d-button></li>
        <li><d-button primaryGhost large>Large</d-button></li>
        <li><d-button secondaryGhost large>Large</d-button></li>

        <li><d-button isDisabled>Disabled</d-button></li>
        <li><d-button secondary isDisabled>Disabled</d-button></li>
        <li><d-button outlined isDisabled>Disabled</d-button></li>
        <li><d-button primaryGhost isDisabled>Disabled</d-button></li>
        <li><d-button secondaryGhost isDisabled>Disabled</d-button></li>

        <li><d-button isLoading>Loading...</d-button></li>
        <li><d-button secondary isLoading></design-system-butt>Loading...</d-button></li>
        <li><d-button outlined isLoading>Loading...</d-button></li>
        <li><d-button primaryGhost isLoading>Loading...</d-button></li>
        <li><d-button secondaryGhost isLoading>Loading...</d-button></li>
      </ul>
      <div :style="{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }">
        <d-button outlined @click="toggleTheme">Switch Theme</d-button>
      </div>
    </div>`
  };
};

export const DynamicTheme = () => {
  const data: { [key: string]: any } = {
    isSampleTheme: false,
    themeStyle: {
      '--primary-color': '#8223D2'
    }
  };

  return {
    components: { dButton },
    template: `
    <ul class="theme-wrapper" :style="themeStyle">
      <li><d-button>Default</d-button></li>
      <li><d-button outlined @click="toggleTheme">Switch Theme</d-button></li>
    </ul>`,
    data () {
      return data;
    },
    methods: {
      toggleTheme () {
        data.isSampleTheme = !data.isSampleTheme;
        if (data.isSampleTheme) {
          data.themeStyle = {
            '--primary-color': 'orange'
          };
        } else {
          data.themeStyle = {
            '--primary-color': '#8223D2'
          };
        }
      }
    }
  };
};
