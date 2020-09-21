import Spinner from './Spinner.vue';

export default {
  title: 'UI Components/Spinner',
  component: Spinner
};

export const Basic = (args: any) => ({
  components: { Spinner },
  template: '<spinner v-bind="args" />',
  data () {
    return {
      args
    };
  }
});

export const All = () => ({
  components: { Spinner },
  template: `
  <ul class="grid-table">
    <li>Default</li>
    <li>Small size</li>
    <li>Large size</li>
    <li>Custom color</li>
    <li></li>

    <li>
      <spinner />
    </li>
    <li>
      <spinner small />
    </li>
    <li>
      <spinner large />
    </li>
    <li>
      <spinner color="pink" />
    </li>
  </ul>`
});
